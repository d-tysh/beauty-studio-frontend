import { useState } from "react";
import { Button } from "../components/Button";
import { H2 } from "../components/headers/H2"
import { FormWrapper } from "../components/form/FormWrapper";
import { useGetAllProceduresQuery } from "../api/procedureApi";
import { Loader } from "../components/Loader";
import { ProceduresList } from "../components/procedureComponents/ProceduresList";

export const AllProceduresPage = () => {
    const { data, isLoading, isFetching } = useGetAllProceduresQuery(undefined, {
        refetchOnMountOrArgChange: true
    });
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);

    const handleAddFormState = () => {
        setIsAddFormOpen(!isAddFormOpen);
    };

    const btnText = isAddFormOpen ? '🗙 Cancel' : '➕ Add procedure';

    return (
        <>
            <H2>Procedures</H2>
            <Button className="mx-auto mt-4 w-50" onClick={handleAddFormState}>
                {btnText}
            </Button>
            {isAddFormOpen && <FormWrapper><p>Procedure add form</p></FormWrapper>}
            <div className="p-4 flex justify-center">
                { (isLoading || isFetching) && <Loader /> }
                {
                    !isLoading && !isFetching && data.result && <ProceduresList procedures={data.result} />
                }
            </div>
        </>
    )
}