import { BarLoader } from "react-spinners"

interface ILoaderProps {
    width?: number,
    height?: number,
    color?: string
}

export const Loader = (props: ILoaderProps) => {
    const { width = 50, height = 4, color = '#000000'} = props;
    
    return <BarLoader width={width} height={height} color={color} />
}