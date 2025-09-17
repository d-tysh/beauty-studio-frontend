import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { AdminInfoPage } from './pages/AdminInfoPage'
import { RestrictedRoute } from './components/RestrictedRoute'
import { PrivateRoute } from './components/PrivateRoute'
import { AllAdminsPage } from './pages/AllAdminsPage'
import { H2 } from './components/headers/H2'

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
                <Route path='/admins' element={<AllAdminsPage />} />
                <Route path='/clients' element={<H2>Clients</H2>} />
                <Route path='/procedures' element={<H2>Procedures</H2>} />
                <Route path='/services' element={<H2>Services</H2>} />
                <Route 
                    path='/admin/:id' 
                    element={<PrivateRoute redirectTo='/login' component={<AdminInfoPage />} />} 
                />
            </Route>
        </Routes>
    )
}