import * as Yup from 'yup';

export const procedureAddSchema = Yup.object().shape({
    admin: Yup.array().of(Yup.string()).min(1).required(),
    client: Yup.string().required(),
    day: Yup.string().required(),
    time: Yup.string().required(),
    procedureName: Yup.string().notRequired(),
    services: Yup.array().of(Yup.string()).min(1).required(),
    additionalInfo: Yup.string().notRequired(),
    price: Yup.number().min(0).required()
})

export const procedureUpdateSchema = Yup.object().shape({
    admin: Yup.string().optional(),
    client: Yup.string().optional(),
    day: Yup.string().optional(),
    time: Yup.string().optional(),
    procedureName: Yup.string().optional().notRequired(),
    services: Yup.array().of(Yup.string()).optional(),
    additionalInfo: Yup.string().optional().notRequired(),
    price: Yup.number().min(0).optional()
})