import { Link } from "react-router-dom"
import { Button } from "../Button"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setMobileMenuOpen } from "../../redux/admin/slice";
import { selectIsMobileMenuOpen } from "../../redux/admin/selectors";
import { MainNav } from "../MainNav";

export const HeaderNav = () => {
    const isMobileMenuOpen = useAppSelector(selectIsMobileMenuOpen);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setMobileMenuOpen(!isMobileMenuOpen));
    }

    return (
        <div className="md:flex justify-center items-center w-full text-xl p-4">
            <div className="flex justify-between items-center md:hidden">
                <Link to='/'>
                    <img 
                        src="/beauty-studio-logo.webp" 
                        alt="Beauty Studio logo" 
                        className="md:mb-0 mx-auto w-20 hover:opacity-60" 
                    />
                </Link>
                <Button className="bg-white w-14 z-10" onClick={handleClick}>
                    { isMobileMenuOpen ? '✖' : '☰' }
                </Button>
            </div>
            <nav className="hidden h-14 md:h-auto md:flex justify-center items-center">
                <MainNav />
            </nav>
        </div>
    )
}