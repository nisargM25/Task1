import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js'
import carRoutes from './routes/product.js'
import multer from 'multer';
import cookieParser from 'cookie-parser';

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())


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

app.post('/upload', upload.single('images'), function (req, res) {
    const file = req.file;
    console.log(req.file)
    // console.log(req.body) 
    res.json(file.filename)
})

app.post('/uploads', upload.array('images'), function (req, res) {
  const files = req.files;
  let allImg="";
    for (let index = 0; index < files.length; index++) {
      // console.log(file) 
      const img = files[index].filename;
      // console.log(img+" "+index)
      allImg===""? allImg = img:allImg +=","+img;
    }
    console.log(allImg+" ::All");
    return res.json(allImg);
})


app.listen(9000, () => {
    console.log("Server is running at port 9000")
});