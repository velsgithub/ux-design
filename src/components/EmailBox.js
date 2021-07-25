import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

const EmailBox = () => {
    const [value, setValue] = useState('')
    return <>
        <div className='p-grid' style={{ alignItems: 'center' }}>
            <div className="p-col-2">
                <img style={{ width: 32 }} alt="Card" src={`${process.env.PUBLIC_URL}/images/headset.png`} />
            </div>
            <div className="p-col-6 p-0">
                <p className='font-weight-bold'>Email</p>
            </div>
        </div>
        <InputText value={value} placeholder='Write on email...' onChange={(e) => setValue(e.target.value)} />

    </>
}

export default EmailBox;