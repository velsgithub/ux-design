import { Card } from 'primereact/card';

const Sidebar = () => {
    const icons = ['menu', 'profile', 'switchuser', 'v'];
    return <Card className='w-100'>
        <div className="p-grid m-0 align-middle" style={{ background: '#ffffff' }}>
            {
                icons.map((c, i) => <div key={i} className={`mb-2`}>
                    <img style={{ width: 20, height: 20 }} src={`${process.env.PUBLIC_URL}/images/${c}.svg`} alt={c} />
                </div>)
            }
        </div>
        <div style={{position: 'absolute', bottom: 0}}>
            <div className='py-1'>
                <img style={{ width: 20, height: 20 }} src={`${process.env.PUBLIC_URL}/images/notification.svg`} alt='notification' />
            </div>
            <div className='py-1'>
                <img style={{ width: 20, height: 20 }} src={`${process.env.PUBLIC_URL}/images/settings.svg`} alt='settings' />
            </div>
        </div>
    </Card>
}

export default Sidebar;
