import { Button } from 'primereact/button';
import { StyledH4 } from './Title';

const CustomerSupport = props => {
    const icons = ['pencil', 'pencil', 'pencil', 'pencil', 'pencil', 'pencil']
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
                <Button label="00:03:45" className="bg-base3 p-button-raised p-button-rounded" />
            </div>
        </div>
        <StyledH4 label='Customer support' color='#1badc3' />
        <div className='p-grid m-0'>
            {
                icons.map((icon, i) => <div key={i} className='p-col-4'>
                    <Button style={{ width: '5rem' }} label={<i className={`fa fa-${icon}`}></i>}
                        className="p-col-4 p-button-raised p-button-rounded bg-base2 border-none" />
                </div>)
            }
        </div>
    </>
}

export default CustomerSupport;