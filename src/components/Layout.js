import ChatBox from "./ChatBox";
import { Card } from 'primereact/card';
import CustomerSupport from "./CustomerSupport";
import EmailBox from "./EmailBox";
import Schedule from "./Schedule";

const Layout = () => {
    const topLevelComponents = [CustomerSupport, EmailBox, ChatBox, Schedule];
    return <div className="p-grid m-0">
        {
            topLevelComponents.map((Component, i) => <div key={i} className="p-col d-flex">
                <Card className='p-0-content w-100'>
                    <Component className='w-100' />
                </Card>

            </div>)
        }
    </div>
}

export default Layout;
