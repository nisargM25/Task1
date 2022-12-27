import * as Yup from 'yup';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const passwordRegExp = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
export const signUpSchema = Yup.object({
    name: Yup.string().min(4).max(25).required("Please enter your Username"),
    email: Yup.string().email().required("Please enter your email"),
    mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number must be 10 characters").required("Please enter your mobile no.").max(10, "Phone number must be 10 characters"),
    password: Yup.string().required("Please enter your password").matches(passwordRegExp, "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"),
    confirm_password: Yup.string().required("Please enter your password").oneOf([Yup.ref("password"), null], "Password must match"),
});

export const signInSchema = Yup.object({
    name: Yup.string().min(4).max(25).required("Please enter your Username or Email"),
    password: Yup.string().min(8).required("Please enter your password")
});
function getMaxDate() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
}
export const sellCarValidation = Yup.object({
    make: Yup.string().required("Car Make of car is Required"),
    model: Yup.string().required("Car Name is Required"),
    regNo: Yup.string().min(6, "Registration Plate/License Number must be of 6 digits").required("Registration Plate/License Number is Required"),
    date: Yup.date().required("Manufacturing Date is Required").max(getMaxDate(), "Manufacturing Date should be before today's date"),
    miles: Yup.number().typeError('Miles must be a number').required("Number of Miles is Required"),
    images: Yup.mixed().required("Atleast 1 image of the car is Required").test("type", "Only Images are Supported", function (value) { return (value && value[0] && value[0].type === 'image/png') || (value && value[0] && value[0].type === 'image/svg+xml') || (value && value[0] && value[0].type === 'image/jpeg') || (value && value[0] && value[0].type === 'image/gif') || (value && value[0] && value[0].type === 'image/bmp') || (value && value[0] && value[0].type === 'image/tiff') || (value && value[0] && value[0].type === 'image/webp') || (value && value[0] && value[0].type === 'image/jpg') }),
    price: Yup.number().typeError('Price must be a number').required("Price Range of the car"),
});
export const updateCarValidation = Yup.object({
    make: Yup.string().required("Car Make of car is Required"),
    model: Yup.string().required("Car Name is Required"),
    regNo: Yup.string().min(6, "Registration Plate/License Number must be of 6 digits").required("Registration Plate/License Number is Required"),
    date: Yup.date().required("Manufacturing Date is Required").max(getMaxDate(), "Manufacturing Date should be before today's date"),
    miles: Yup.number().typeError('Miles must be a number').required("Number of Miles is Required"),
    price: Yup.number().typeError('Price must be a number').required("Price Range of the car"),
});
