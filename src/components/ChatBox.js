import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

const ChatBox = () => {
    const [value, setValue] = useState('')
    return <>
        <div className='p-grid' style={{ alignItems: 'center' }}>
            <div className="p-col-2">
                <img style={{ width: 32 }} alt="Card" src={`${process.env.PUBLIC_URL}/images/headset.png`} />
            </div>
            <div className="p-col-6 p-0">
                <p className='font-weight-bold'>Chat</p>
            </div>
        </div>
        <InputText value={value} placeholder='Write on message...' onChange={(e) => setValue(e.target.value)} />
        <div className='pt-2 text-center'>
            <Button label="Send" className="p-button-raised p-button-rounded" style={{width: '12rem'}} />
        </div>
    </>
}

export default ChatBox;