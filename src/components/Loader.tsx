import { MoonLoader } from "react-spinners"

interface ILoaderProps {
    size?: number,
    color?: string
}

export const Loader = (props: ILoaderProps) => {
    const { size = 50, color = '#000000'} = props;
    
    return <MoonLoader size={size} color={color} />
}