import type { IService } from "./service"

export interface IProcedure {
    _id: string,
    procedureName: string,
    price: number,
    additionalInfo: string,
    date: Date,
    admin: IProcedureAdmin,
    client: IProcedureClient,
    services: IService[] | []
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

export type ProcedureData =
    Pick<IProcedure, "procedureName" | "additionalInfo">
    & {
        day?: string,
        time?: string,
        admin: string,
        client: string,
        services: string[] | [],
        price: number
    };