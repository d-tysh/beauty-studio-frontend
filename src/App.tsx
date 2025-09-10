import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/admins' element={<h2>Admins</h2>} />
                <Route path='/clients' element={<h2>Clients</h2>} />
                <Route path='/procedures' element={<h2>Procedures</h2>} />
                <Route path='/services' element={<h2>Services</h2>} />
            </Route>
        </Routes>
    )
}

export default App
