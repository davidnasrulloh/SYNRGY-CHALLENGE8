import { ReactNode } from 'react'
import Navbar from './navbar';
import Footer from './footer';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({children}:MainLayoutProps) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default MainLayout