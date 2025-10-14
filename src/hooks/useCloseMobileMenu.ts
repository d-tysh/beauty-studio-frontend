import { useCallback } from "react";
import { selectIsMobileMenuOpen } from "../redux/admin/selectors";
import { setMobileMenuOpen } from "../redux/admin/slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const useCloseMobileMenu = () => {
    const isMobileMenuOpen = useAppSelector(selectIsMobileMenuOpen);
    const dispatch = useAppDispatch();

    return useCallback(() => {
        if (isMobileMenuOpen) dispatch(setMobileMenuOpen(false));
    }, [isMobileMenuOpen, dispatch])
}