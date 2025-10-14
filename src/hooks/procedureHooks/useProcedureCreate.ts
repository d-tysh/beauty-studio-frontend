import { toast } from "react-toastify";
import { useCreateProcedureMutation } from "../../redux/api/procedureApi";
import { useGetServicesQuery } from "../../redux/api/serviceApi";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useAppSelector } from "../../redux/hooks";
import type { ProcedureAddProps } from "../../types/procedures";

export const useProcedureCreate = (clientId: string) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const [createProcedure, { isLoading: isCreateLoading }] = useCreateProcedureMutation();

    const { data: servicesData } = useGetServicesQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    const handleCreateProcedure = async (data: ProcedureAddProps) => {
        const { day, time, services, ...rest } = data;
        const date = `${day}T${time}`;
        
        const price = servicesData?.data.reduce((acc, item) => {
            if ((services as string[]).includes(item._id)) {
                return acc + Number(item.price);
            }
            return acc;
        }, 0)

        const procedureData = {
            ...rest,
            date,
            price,
            services,
            client: clientId,
            admin: currentAdmin?.status === 'pro' ? data.admin : currentAdmin?.id
        };

        try {
            const result = await createProcedure(procedureData);
            toast.success(result.data.message);
        } catch (error) {
            console.error(error);
            toast.error('Unable to add procedure...');
            throw error;
        }
    }

    return { handleCreateProcedure, isCreateLoading };
}