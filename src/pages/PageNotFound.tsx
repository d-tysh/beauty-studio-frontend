import { useEffect, useState } from "react";

const PageNotFound = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => {
            clearInterval(t);
        }
    }, []);

    return (
        <div className="bg-[#f6f0e9] h-screen">
            <img src="/404.webp"
                className={`
                    transition-all duration-1000 ease-out w-[80%] md:w-[30%] mx-auto
                    ${visible ? "opacity-100 translate-y" : "opacity-0 translate-y-20"}
                `}
            />
        </div>
    )
}

export default PageNotFound;