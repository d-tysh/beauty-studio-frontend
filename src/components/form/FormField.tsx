import { Field } from "formik"
import type { InputHTMLAttributes } from "react"

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement>  {
    label: string,
    name: string,
    as?: string,
    className?: string
}

export const FormField = ({ label, name, as, className, ...props }: FormFieldProps) => {
    return (
        <label className="service-form-label">
            <span className="font-semibold w-1/3 ml-2 md:ml-0">{label}</span>
            <Field
                name={name}
                className={`${className} custom-form-field`}
                as={as}
                {...props}
            />
        </label>
    )
}