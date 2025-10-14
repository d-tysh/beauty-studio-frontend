import './App.css'
import { useGetCurrentAdminQuery } from './redux/api/adminApi'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/hooks'
import { setCurrentAdmin } from './redux/admin/slice'
import { ToastContainer } from 'react-toastify'
import { AppRoutes } from './AppRoutes'

function App() {
    const { data, isSuccess } = useGetCurrentAdminQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setCurrentAdmin(data));
        }
    }, [data, dispatch, isSuccess])

    return (
        <>
            <AppRoutes />
            <ToastContainer />
        </>
    )
}

export default App
