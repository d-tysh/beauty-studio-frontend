import { Field } from "formik"
import { type InputHTMLAttributes } from "react"
import type { ValidationErrors } from "../../types/types";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
    as?: string,
    className?: string,
    errorsInfo?: ValidationErrors
}

export const FormField = ({ label, name, as, className, errorsInfo, ...props }: FormFieldProps) => {
    const isError = !!errorsInfo?.errors?.[name] && !!errorsInfo?.touched?.[name];
    const firstCharUpper = (str: string) => str[0].toUpperCase() + str.slice(1);

    return (
        <label className="custom-form-label relative">
            <span className="font-semibold w-1/3 ml-2 md:ml-0">{label}</span>
            <Field
                name={name}
                className={`${className} custom-form-field`}
                as={as}
                {...props}
            />
            {
                isError &&
                <p className="text-rose-400 font-semibold text-xs absolute left-1/2 -bottom-4 -translate-x-1/2">
                    {errorsInfo && firstCharUpper(errorsInfo.errors?.[name] as string)}
                </p>
            }
        </label>
    )
}