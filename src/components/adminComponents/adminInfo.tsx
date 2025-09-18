import type { IAdmin } from "../../types/types"

export const AdminInfo = ({ adminInfo }: { adminInfo: IAdmin }) => {
    const { _id: id, name, login, status } = adminInfo;

    return (
        <>
            <p>
                <span className="font-semibold">Admin ID: </span>{id}
            </p>
            <p>
                <span className="font-semibold">Name: </span>{name}
            </p>
            <p>
                <span className="font-semibold">Login: </span>{login}
            </p>
            <p>
                <span className="font-semibold">Status: </span>{status}
            </p>
        </>
    )
}