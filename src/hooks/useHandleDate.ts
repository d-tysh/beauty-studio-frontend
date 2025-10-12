export const useHandleDate = (date: Date | string) => {
    const procedureDate = new Date(date).toISOString().split('T');
    const day = procedureDate[0];
    const time = procedureDate[1].slice(0, 5);

    return [day, time];
}