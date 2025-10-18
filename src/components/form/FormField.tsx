import { Field, useField } from "formik"
import { type InputHTMLAttributes } from "react"

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
    as?: string,
    className?: string
}

export const FormField = ({ label, name, as, className, ...props }: FormFieldProps) => {
    const firstCharUpper = (str: string) => str[0].toUpperCase() + str.slice(1);
    const [field, meta] = useField(name);
    const isError = meta.touched && !!meta.error;

    return (
        <label className="custom-form-label relative">
            <span className="font-semibold w-1/3 ml-2 md:ml-0">{label}</span>
            <Field
                {...field}
                className={`${className} custom-form-field`}
                as={as}
                {...props}
            />
            {
                isError &&
                <p className="text-rose-400 font-semibold text-xs absolute left-1/2 -bottom-4 -translate-x-1/2">
                    {firstCharUpper(meta.error!)}
                </p>
            }
        </label>
    )
}