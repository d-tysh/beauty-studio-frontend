import type { PropsWithChildren } from "react"

export const H1 = ({ children }: PropsWithChildren) => {
    return (
        <h1 className="text-2xl font-bold bg-amber-200 p-4">
            {children}
        </h1>
    )
}