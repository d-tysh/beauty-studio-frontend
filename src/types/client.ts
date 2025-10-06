export interface IClient {
    _id: string,
    name: string,
    phoneNumber: string,
    description: string,
    discount: number
};

export type IClientRegister = Omit<IClient, "_id">;