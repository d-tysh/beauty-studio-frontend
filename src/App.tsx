import './App.css'
import { useGetCurrentAdminQuery } from './api/adminApi'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/hooks'
import { adminLogin } from './redux/admin/slice'
import { ToastContainer } from 'react-toastify'
import { AppRoutes } from './AppRoutes'

function App() {
    const { data } = useGetCurrentAdminQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) dispatch(adminLogin(data));
    }, [data, dispatch])

    return (
        <>
            <AppRoutes />
            <ToastContainer />
        </>
    )
}

export default App
