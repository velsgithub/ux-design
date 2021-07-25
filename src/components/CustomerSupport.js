import { Button } from 'primereact/button';
import Title from './Title';

const CustomerSupport = props => {
    return <>
        <div className='p-grid' style={{ alignItems: 'center' }}>
            <div className="p-col-2">
                <img style={{ width: 32 }} alt="Card" src={`${process.env.PUBLIC_URL}/images/headset.png`} />
            </div>
            <div className="p-col-6 p-0">
                <p className='font-weight-bold'>Jenifer Lopez</p>
                <span>044 234232423</span>
            </div>
            <div className="p-col-4">
                <Button label="00:03::45" className="p-button-raised p-button-rounded" />
            </div>
        </div>
        <Title label='Customer support' />
    </>
}

export default CustomerSupport;