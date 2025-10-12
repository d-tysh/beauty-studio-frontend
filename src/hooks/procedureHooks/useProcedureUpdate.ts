import { toast } from "react-toastify";
import { useUpdateProcedureByIdMutation } from "../../api/procedureApi";
import type { ProcedureData, ProcedureUpdateProps } from "../../types/procedures";

export const useProcedureUpdate = ({procedureId, servicesData, admin, client}: ProcedureUpdateProps) => {
    const [updateProcedureById, { isLoading: isUpdateLoading }] = useUpdateProcedureByIdMutation();

    const updateProcedure = async (data: ProcedureData) => {
            const { day, time, ...procedureData } = data;
            const date = `${day}T${time}`;
            const services: string[] = data.services;
    
            const price = servicesData?.data.reduce((acc, item) => {
                if ((services).includes(item._id)) {
                    return acc + Number(item.price);
                }
                return acc;
            }, 0)
    
            const dataToUpdate = { 
                ...procedureData, 
                date, 
                admin: admin._id, 
                client: client._id,
                price
            };
            
            try {
                const result = await updateProcedureById({ procedureId, data: dataToUpdate }).unwrap();
                toast.success(result.message);
            } catch (error) {
                console.error(error);
                toast.error('Unable to update');
            }
        }

    return { updateProcedure, isUpdateLoading };
}