import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { AdminInfoPage } from './pages/AdminInfoPage'
import { RestrictedRoute } from './components/RestrictedRoute'
import { PrivateRoute } from './components/PrivateRoute'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route 
                    path='/login' 
                    element={<RestrictedRoute redirectTo='/' component={<LoginPage />} />} 
                />
                <Route 
                    path='/register' 
                    element={<RestrictedRoute redirectTo='/' component={<RegisterPage />} />} 
                />
                <Route path='/admins' element={<h2 className='custom-h2'>Admins</h2>} />
                <Route path='/clients' element={<h2 className='custom-h2'>Clients</h2>} />
                <Route path='/procedures' element={<h2 className='custom-h2'>Procedures</h2>} />
                <Route path='/services' element={<h2 className='custom-h2'>Services</h2>} />
                <Route 
                    path='/admin/:id' 
                    element={<PrivateRoute redirectTo='/login' component={<AdminInfoPage />} />} 
                />
            </Route>
        </Routes>
    )
}