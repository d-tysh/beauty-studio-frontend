import * as Yup from 'yup';

export const procedureAddSchema = Yup.object().shape({
    procedureName: Yup.string().min(2, "Too short").notRequired(),
    additionalInfo: Yup.string().min(2, "Too short").notRequired(),
    day: Yup.string().required("Please select a day"),
    time: Yup.string().required("Please select a time"),
})

export const procedureUpdateSchema = Yup.object().shape({
    procedureName: Yup.string().min(2, "Too short"),
    additionalInfo: Yup.string().min(2, "Too short"),
    day: Yup.string().required("Please select a day"),
    time: Yup.string().required("Please select a time"),
})