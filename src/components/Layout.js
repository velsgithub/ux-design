import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";

const Layout = () => {
    return <div className='p-grid m-0'>
        <div className='p-col-1 p-0 d-flex' style={{ width: '4%' }}>
            <Sidebar />
        </div>
        <div className='p-col-11 p-0' style={{ width: '96%' }}>
            <Header />
            <div className='p-1 bg-base2'>
                <Home />
            </div>
        </div>
    </div>
}

export default Layout;
