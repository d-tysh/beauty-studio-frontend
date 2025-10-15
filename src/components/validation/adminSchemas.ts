import * as Yup from 'yup';

export const adminLoginSchema = Yup.object().shape({
    login: Yup.string().min(2).max(30).matches(/^\S+$/).required(),
    password: Yup.string().min(6).max(30).matches(/^\S+$/).required()
});

export const adminRegisterSchema = Yup.object().shape({
    name: Yup.string().min(2).max(30).required(),
    login: Yup.string().min(2).max(30).matches(/^\S+$/).required(),
    email: Yup.string().email().notRequired(),
    password: Yup.string().min(6).max(30).matches(/^\S+$/).required(),
    status: Yup.string().oneOf(['pro', 'basic']).required(),
})

export const adminUpdateSchema = Yup.object().shape({
    name: Yup.string().min(2).max(30),
    login: Yup.string().min(2).max(30).matches(/^\S+$/),
    email: Yup.string().email().notRequired(),
    status: Yup.string().oneOf(['pro', 'basic'])
})