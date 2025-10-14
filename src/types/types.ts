import type { FormikErrors, FormikTouched } from "formik"

export interface ValidationErrors<T> {
    errors: FormikErrors<T>
    touched: FormikTouched<T>
}