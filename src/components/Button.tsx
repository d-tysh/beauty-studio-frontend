import type { ButtonHTMLAttributes } from "react"
import { Loader } from "./Loader"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean,
    className?: string,
}

export const Button = ({ isLoading, className, children, ...props }: IButton) => {
    return (
        <button 
            className={`
                ${className} 
                flex justify-center items-center 
                py-2 px-4 h-10 bg-amber-200 
                hover:bg-amber-300 active:scale-95
                `} 
            {...props}
        >
            {isLoading ? <Loader /> : children}
        </button>
    )
}