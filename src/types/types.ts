import type { FormikTouched } from "formik"

export interface ValidationErrors {
    errors: Record<string, unknown | undefined>
    touched: Record<string, boolean | FormikTouched<unknown> | undefined>
}