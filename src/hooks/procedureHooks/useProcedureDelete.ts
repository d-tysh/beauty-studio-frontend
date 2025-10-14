import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDeleteProcedureMutation } from "../../redux/api/procedureApi";

export const useProcedureDelete = (procedureId: string) => {
    const [deleteProcedure, { isLoading: isDeleteLoading }] = useDeleteProcedureMutation();
    const naviate = useNavigate();

    const handleDeleteProcedure = async () => {
        try {
            await deleteProcedure(procedureId).unwrap();
            naviate('/procedures');
            toast.success("Procedure deleted");
        } catch (error) {
            console.error(error);
            toast.error('Unable to delete procedure...');
            throw error;
        }
    }

    return { handleDeleteProcedure, isDeleteLoading };
}