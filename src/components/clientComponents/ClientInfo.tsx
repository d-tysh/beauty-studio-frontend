import { Form, Formik } from "formik"
import type { IClient } from "../../types/client"
import { Button } from "../Button";
import { ClientFormFields } from "./ClientFormFields";
import { useClientDelete } from "../../hooks/clientHooks/useClientDelete";
import { useClientUpdate } from "../../hooks/clientHooks/useClientUpdate";
import { FormWrapper } from "../form/FormWrapper";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentAdmin } from "../../redux/admin/selectors";

export const ClientInfo = ({ clientInfo }: { clientInfo: IClient }) => {
    const { _id: id, name, phoneNumber, description, discount } = clientInfo;
    const { handleDeleteClient, isDeleteLoading } = useClientDelete(id);
    const { handleUpdateClient, isUpdateLoading } = useClientUpdate(id);
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const navigate = useNavigate();

    const createProcedure = () => {
        navigate('/procedures/add', {
            state: {
                clientId: id, 
                clientName: name
            }
        });
    }

    const btnDisabled = currentAdmin?.status !== 'pro';

    return (
        <FormWrapper>
            <Formik
                initialValues={{ name, phoneNumber, description, discount }}
                enableReinitialize
                onSubmit={handleUpdateClient}
            >
                <Form className="custom-form my-4">
                    <Button className="custom-form-button ml-auto" isLoading={isDeleteLoading}
                        type='button' onClick={handleDeleteClient} disabled={btnDisabled}
                    >
                        ✖ Delete
                    </Button>
                    <ClientFormFields />
                    <Button className="custom-form-button mt-2" isLoading={isUpdateLoading}>
                        💾 Update client data
                    </Button>
                    <Button className="custom-form-button" isLoading={isDeleteLoading}
                        type='button' onClick={createProcedure}>
                        ✚ Create procedure
                    </Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}