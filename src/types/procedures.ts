import type { IService } from "./service"

export interface IProcedure {
    _id: string,
    procedureName: string,
    price: number,
    additionalInfo: string,
    date: Date,
    admin: IProcedureAdmin,
    client: IProcedureClient,
    description: Omit<IService, "description">[]
}

interface IProcedureAdmin {
    _id: string,
    name: string
}

interface IProcedureClient {
    _id: string,
    name: string,
    phoneNumber: string,
    description: string,
    discount: number
}