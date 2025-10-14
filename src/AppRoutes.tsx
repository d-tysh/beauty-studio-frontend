import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react';
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const AdminInfoPage = lazy(() => import('./pages/AdminInfoPage'))
const RestrictedRoute = lazy(() => import('./components/RestrictedRoute'))
const PrivateRoute = lazy(() => import('./components/PrivateRoute'))
const AllAdminsPage = lazy(() => import('./pages/AllAdminsPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServiceInfoPage = lazy(() => import('./pages/ServiceInfoPage'))
const AllClientsPage = lazy(() => import('./pages/AllClientsPage'))
const ClientInfoPage = lazy(() => import('./pages/ClientInfoPage'))
const AllProceduresPage = lazy(() => import('./pages/AllProceduresPage'))
const ProcedureInfoPage = lazy(() => import('./pages/ProcedureInfoPage'))
const ProcedureAddPage = lazy(() => import('./pages/ProcedureAddPage'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

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
                <Route 
                    path='/procedures' 
                    element={<PrivateRoute redirectTo='/login' component={<AllProceduresPage />} />} 
                />
                <Route 
                    path='/procedures/:procedureId' 
                    element={<PrivateRoute redirectTo='/login' component={<ProcedureInfoPage />} />} 
                />
                <Route 
                    path='/procedures/add' 
                    element={<PrivateRoute redirectTo='/login' component={<ProcedureAddPage />} />} 
                />

                {/* SERVICE */}
                <Route 
                    path='/services' 
                    element={<PrivateRoute redirectTo='/login' component={<ServicesPage />} />} 
                />
                <Route 
                    path='/services/:serviceId' 
                    element={<PrivateRoute redirectTo='/login' component={<ServiceInfoPage />} />} 
                />

                <Route  path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}