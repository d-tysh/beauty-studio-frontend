import { Link } from "react-router-dom";
import type { IProcedure } from "../../types/procedures"
import { FormWrapper } from "../form/FormWrapper";
import { Field, Form, Formik } from "formik";
import { FormField } from "../form/FormField";
import { Button } from "../Button";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentAdmin } from "../../redux/admin/selectors";

type ProcedureData =
    Pick<IProcedure, "procedureName" | "additionalInfo" | "description">
    & {
        day?: string,
        time?: string,
        admin: string,
        client: string
    };

export const ProcedureInfo = ({ procedureInfo }: { procedureInfo: IProcedure }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const {
        procedureName, date, additionalInfo, description, admin, client
    } = procedureInfo;
    const procedureDate = date.toString().split('T');
    const day = procedureDate[0];
    const time = procedureDate[1].slice(0, 5);

    const handleSubmit = (data: ProcedureData) => {
        const date = new Date(`${day}T${time}`).toISOString();
        delete data.day;
        delete data.time;
        const procedureData = { ...data, date };
        console.log(procedureData);
    }

    return (
        <div className="flex flex-col">
            <FormWrapper>
                <Formik
                    initialValues={{
                        procedureName, additionalInfo, description, day, time,
                        admin: admin.name,
                        client: client.name
                    }}
                    enableReinitialize
                    onSubmit={handleSubmit}
                >
                    <Form className="flex flex-col gap-4 w-120 mx-auto mt-8 text-left">
                        <FormField label="Procedure" name="procedureName" required
                            autoComplete="off" placeholder="Enter procedure name..."
                        />
                        <FormField as="textarea" label="Additional info" name="additionalInfo" required
                            autoComplete="off" placeholder="Enter additional info..."
                        />

                        <label className="service-form-label">
                            <span className="font-semibold w-1/3 ml-2 md:ml-0">Day</span>
                            <div className="flex gap-2 items-center justify-between w-full">
                                <Field type="date" name="day" className="custom-form-field cursor-text" />
                            </div>
                        </label>

                        <label className="service-form-label">
                            <span className="font-semibold w-1/3 ml-2 md:ml-0">Time</span>
                            <div className="flex gap-2 items-center justify-between w-full">
                                <Field type="time" name="time" className="custom-form-field cursor-text" data-time />
                            </div>
                        </label>

                        <label className="service-form-label">
                            <span className="font-semibold w-1/3 ml-2 md:ml-0">Client</span>
                            <div className="flex gap-2 items-center justify-between w-full relative">
                                <Field name="client" className="custom-form-field cursor-pointer" readOnly />
                                <Link to={`/clients/${client._id}`}
                                    className="absolute right-0 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-r-[8px]"
                                >🔗</Link>
                            </div>
                        </label>

                        {
                            currentAdmin?.status === 'pro' &&
                            <label className="service-form-label">
                                <span className="font-semibold w-1/3 ml-2 md:ml-0">Admin</span>
                                <div className="flex gap-2 items-center justify-between w-full relative">
                                    <Field name="admin" className="custom-form-field cursor-pointer" readOnly />
                                    <Link to={`/admin/${admin._id}`}
                                        className="absolute right-0 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-r-[8px]"
                                    >🔗</Link>
                                </div>
                            </label>
                        }

                        <Button>
                            Update
                        </Button>
                    </Form>
                </Formik>
            </FormWrapper>
        </div>
    )
}