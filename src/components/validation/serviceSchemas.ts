import * as Yup from "yup";

export const serviceAddSchema = Yup.object().shape({
    serviceName: Yup.string().min(2).required(),
    description: Yup.string().notRequired(),
    price: Yup.number().min(0).required(),
    time: Yup.number().min(0).required()
})

export const serviceUpdateSchema = Yup.object().shape({
    serviceName: Yup.string().min(2).required(),
    description: Yup.string().notRequired(),
    price: Yup.number().min(0),
    time: Yup.number().min(0)
})