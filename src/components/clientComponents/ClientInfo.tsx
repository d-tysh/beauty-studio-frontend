import { Form, Formik } from "formik"
import type { IClient } from "../../types/client"
import { Button } from "../Button";
import { ClientFormFields } from "./ClientFormFields";
import { useClientDelete } from "../../hooks/clientHooks/useClientDelete";
import { useClientUpdate } from "../../hooks/clientHooks/useClientUpdate";
import { FormWrapper } from "../form/FormWrapper";
import { useNavigate } from "react-router-dom";

export const ClientInfo = ({ clientInfo }: { clientInfo: IClient }) => {
    const { _id: id, name, phoneNumber, description, discount } = clientInfo;
    const { handleDeleteClient, isDeleteLoading } = useClientDelete(id);
    const { handleUpdateClient, isUpdateLoading } = useClientUpdate(id);
    const navigate = useNavigate();

    const createProcedure = () => {
        navigate('/procedures/add', {
            state: {
                clientId: id, 
                clientName: name
            }
        });
    }

    return (
        <FormWrapper>
            <Formik
                initialValues={{ name, phoneNumber, description, discount }}
                enableReinitialize
                onSubmit={handleUpdateClient}
            >
                <Form className="flex flex-col gap-4 w-120 mx-auto my-8 text-left">
                    <Button className="custom-form-button ml-auto" isLoading={isDeleteLoading}
                        type='button' onClick={handleDeleteClient}>
                        ❌ Delete
                    </Button>
                    <ClientFormFields />
                    <Button className="custom-form-button mt-2" isLoading={isUpdateLoading}>
                        💾 Update client data
                    </Button>
                    <Button className="custom-form-button" isLoading={isDeleteLoading}
                        type='button' onClick={createProcedure}>
                        ➕ Create procedure
                    </Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}