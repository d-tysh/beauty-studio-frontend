import React, { useEffect, useState } from "react";

export const FormWrapper = ({ children }: React.PropsWithChildren) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => {
            clearInterval(t);
        }
    }, []);

    return (
        <div
            className={`
                    transition-all duration-500 ease-in-out 
                    ${visible ? "opacity-100 translate-y" : "opacity-0 translate-y-20"}
                `}
        >
            {children}
        </div>
    )
}