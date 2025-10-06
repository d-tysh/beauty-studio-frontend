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
import { ServicesPage } from './pages/ServicesPage'
import { ServiceInfoPage } from './pages/ServiceInfoPage'
import { AllClientsPage } from './pages/AllClientsPage'
import { ClientInfoPage } from './pages/ClientInfoPage'

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
                
                {/* ADMIN */}
                <Route path='/admins' element={<AllAdminsPage />} />
                <Route 
                    path='/admin/:id' 
                    element={<PrivateRoute redirectTo='/login' component={<AdminInfoPage />} />} 
                />

                {/* CLIENT */}
                <Route 
                    path='/clients' 
                    element={<PrivateRoute redirectTo='/login' component={<AllClientsPage />} />} 
                />
                <Route 
                    path='/clients/:clientId' 
                    element={<PrivateRoute redirectTo='/login' component={<ClientInfoPage />} />} 
                />

                {/* PROCEDURE */}
                <Route path='/procedures' element={<H2>Procedures</H2>} />
                
                {/* SERVICE */}
                <Route 
                    path='/services' 
                    element={<PrivateRoute redirectTo='/login' component={<ServicesPage />} />} 
                />
                <Route 
                    path='/services/:serviceId' 
                    element={<PrivateRoute redirectTo='/login' component={<ServiceInfoPage />} />} 
                />
            </Route>
        </Routes>
    )
}