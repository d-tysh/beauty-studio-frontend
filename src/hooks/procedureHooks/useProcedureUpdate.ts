import { toast } from "react-toastify";
import { useUpdateProcedureByIdMutation } from "../../api/procedureApi";
import type { ProcedureData } from "../../types/procedures";
import type { IAdmin } from "../../types/types";
import type { IService } from "../../types/service";
import type { IClient } from "../../types/client";

interface ProcedureUpdateProps {
    procedureId: string, 
    servicesData?: {
        count: number,
        data: IService[] | []
    },
    admin: Pick<IAdmin, '_id' | 'name'>, 
    client: Pick<IClient, '_id' | 'name'>
}

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