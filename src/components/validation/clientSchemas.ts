import * as Yup from "yup";

export const clientRegisterSchema = Yup.object().shape({
    name: Yup.string().min(2).max(50).required(),
    phoneNumber: Yup.string().matches(/^\+\d{12}$/, 'Incorrect format').required(),
    description: Yup.string().notRequired(),
    discount: Yup.number().min(0).max(100)
})

export const clientUpdateSchema = Yup.object().shape({
    name: Yup.string().min(2).max(50),
    phoneNumber: Yup.string().matches(/^\+\d{12}$/, 'Incorrect format'),
    description: Yup.string().notRequired(),
    discount: Yup.number().min(0).max(100)
})