import ChatBox from "./ChatBox";
import { Card } from 'primereact/card';
import CustomerSupport from "./CustomerSupport";
import EmailBox from "./EmailBox";
import Schedule from "./Schedule";
import PersonDetails from "./PersonDetails";
import ProductDetails from "./ProductDetails";
import InteractionHistory from "./InteractionHistory";

const Layout = () => {
    const components = [
        { component: CustomerSupport, colDiv: 3 },
        { component: EmailBox, colDiv: 3 },
        { component: ChatBox, colDiv: 3 },
        { component: Schedule, colDiv: 3 },
        { component: PersonDetails, colDiv: 4 },
        { component: ProductDetails, colDiv: 4 },
        { component: InteractionHistory, colDiv: 4 }
    ];
    return <>
        <div className="p-grid m-0">
            {
                components.map((c, i) => <div key={i} className={`p-col-${c.colDiv} d-flex mb-2`}>
                    <Card className='p-0-content w-100'>
                        <c.component className='w-100' />
                    </Card>
                </div>)
            }
        </div>
    </>
}

export default Layout;
