import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { StyledSpan } from './Title';
import { Dropdown } from 'primereact/dropdown';

const Header = () => {
    const [value, setValue] = useState('');
    return <div className='p-0-card-body p-0-content align-center border-bottom bg-white' style={{ minHeight: '50px' }}>
        <div className='p-grid m-0 w-100'>
            <div className='p-col-6 p-0 align-center'>
                <div className='p-grid m-0 w-100'>
                    <div className='p-col-2 p-0 text-center'>
                        <h4 className='font-weight-bold m-0'>Agent Id: <StyledSpan className='font-weight-bold m-0' color='#1badc3' label='5001' /></h4>
                    </div>
                    <div className='p-col-2 p-0 text-center'>
                        <h4 className='font-weight-bold m-0'>Extension: <StyledSpan className='font-weight-bold m-0' color='#1badc3' label='5001' /></h4>
                    </div>
                    <div className='p-col-8 p-0 text-center'>
                        <h4 className='font-weight-bold m-0'>IVR Exit Point: <StyledSpan className='font-weight-bold m-0' color='#ff8545' label='CREDIT CARD MENU, PAYMENT OPTIONS' /></h4>
                    </div>
                </div>
            </div>
            <div className='p-col-6 p-0'>
                <div className='p-grid m-0 w-100 align-end'>
                    <div className='p-col-4 p-0 text-center'>
                        <div className="d-flex">
                            <InputText placeholder='Number to dial...' value={value} onChange={setValue} />
                            <Button className='bg-base1'><img src={`${process.env.PUBLIC_URL}/images/dial.svg`} alt='dial' style={{ width: 20 }} /></Button>
                        </div>
                    </div>
                    <div className='p-col-1 p-0 text-center'>
                        <img src={`${process.env.PUBLIC_URL}/images/chat.svg`} style={{ width: 32 }} alt='chat' />
                    </div>
                    <div className='p-col-1 p-0 text-center'>
                        <img src={`${process.env.PUBLIC_URL}/images/clock.svg`} style={{ width: 32 }} alt='clock' />
                    </div>
                    <div className='p-col-2 p-0 text-center'>
                        <div className='bg-base2 align-center'>
                            <img src={`${process.env.PUBLIC_URL}/images/profile.svg`} style={{ width: 20 }} alt='profile' />
                            &nbsp;<span style={{color: 'red'}}>Not ready</span>
                            &nbsp;&nbsp;<i className='fa fa-caret-down'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Header;
