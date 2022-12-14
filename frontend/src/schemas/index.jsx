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
export const sellCarValidation = Yup.object({
    make: Yup.string().required("Company Name of car is Required"),
    model: Yup.string().required("Car Name is Required"),
    regNo: Yup.string().min(6,"Car Number must be of 6 digits").required("Car Number is Required"),
    date: Yup.date().required("Manufacturing Date is Required"),
    miles: Yup.number().required("Number of Miles is Required"),
    images: Yup.string().required("Atleast 1 image of the car is Required"),
    price: Yup.string().required("Price Range of the car"),
});