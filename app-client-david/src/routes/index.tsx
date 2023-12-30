import { Route, Routes } from 'react-router'
import Protected from '../providers/ProtectedRoutes'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CarsPage, HomePage, LoginPage, RegisterPage } from '../pages'

const MyRoutes = () => (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cars" element={
        <Protected>
          <CarsPage />
        </Protected>
      } />
      <Route path="/login" element={
        <GoogleOAuthProvider clientId="662794710378-m4dks6hoi1tpnkeour6co9kl63hpk3jd.apps.googleusercontent.com">
          <LoginPage />
        </GoogleOAuthProvider>
      } />
      <Route path="/register" element={
        <GoogleOAuthProvider clientId="662794710378-m4dks6hoi1tpnkeour6co9kl63hpk3jd.apps.googleusercontent.com">
          <RegisterPage />
        </GoogleOAuthProvider>
      } />
    </Routes>
)

export default MyRoutes
