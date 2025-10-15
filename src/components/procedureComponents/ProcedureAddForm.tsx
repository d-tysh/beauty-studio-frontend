import { Form, Formik } from "formik"
import { FormWrapper } from "../form/FormWrapper"
import { ProcedureFormFields } from "./ProcedureFormFields"
import { Button } from "../Button"
import { useLocation } from "react-router-dom"
import { useProcedureCreate } from "../../hooks/procedureHooks/useProcedureCreate"
import { procedureAddSchema } from "../validation"

export const ProcedureAddForm = () => {
    const { state } = useLocation();
    const client = {
        _id: state.clientId,
        name: state.clientName
    }
    const { handleCreateProcedure, isCreateLoading } = useProcedureCreate(client._id);

    return (
        <FormWrapper>
            <Formik
                initialValues={{
                    procedureName: '',
                    additionalInfo: '',
                    day: '',
                    time: '',
                    price: 0,
                    admin: '',
                    client: client.name || '',
                    services: []
                }}
                validationSchema={procedureAddSchema}
                onSubmit={handleCreateProcedure}
            >
                {({ errors, touched }) => (
                    <Form className="custom-form my-4">
                        <ProcedureFormFields client={client} addProcedure errorsInfo={{ errors, touched }} />
                        <Button className="custom-form-button mt-2" isLoading={isCreateLoading} type="submit">
                            Add procedure
                        </Button>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    )
}