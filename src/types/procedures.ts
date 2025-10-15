import type { IClient } from "./client";
import type { IService } from "./service"
import type { IAdmin } from "./admin";

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

export interface ProcedureUpdateProps {
    procedureId: string,
    servicesData?: {
        count: number,
        data: IService[] | []
    },
    admin: Pick<IAdmin, '_id' | 'name'>,
    client: Pick<IClient, '_id' | 'name'>
}

export interface ProcedureAddProps {
    admin: string | '',
    client: string | '',
    procedureName: string | '',
    additionalInfo: string | '',
    day: string | '',
    time: string | '',
    price: number,
    services: string[] | []
}