import type { PropsWithChildren } from "react"

export const H2 = ({ children }: PropsWithChildren) => {
    return (
        <h2 className="text-2xl font-bold bg-amber-200 p-4">
            {children}
        </h2>
    )
}