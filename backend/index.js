import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js'
import carRoutes from './routes/product.js'
import multer from 'multer';

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api/auth", authRoutes)
app.use("/api/cars", carRoutes)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/public/upload')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  })
const upload = multer({ storage })

app.post('/upload', upload.array('images'), function (req, res) {
    const file = req.file;
    res.json(file)
})


app.listen(9000, () => {
    console.log("Server is running at port 9000")
});