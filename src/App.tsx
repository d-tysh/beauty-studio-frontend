import './App.css'
import { useGetCurrentAdminQuery } from './redux/api/adminApi'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/hooks'
import { setCurrentAdmin, setLoading } from './redux/admin/slice'
import { ToastContainer } from 'react-toastify'
import { AppRoutes } from './AppRoutes'

function App() {
    const { data, isSuccess, isError } = useGetCurrentAdminQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(true))
        if (isSuccess && data) {
            dispatch(setCurrentAdmin(data));
        } else if (isError) {
            dispatch(setLoading(false));
        }
    }, [data, dispatch, isSuccess, isError])

    return (
        <>
            <AppRoutes />
            <ToastContainer />
        </>
    )
}

export default App
