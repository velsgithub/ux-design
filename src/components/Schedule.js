import { getScheduleCallbacks } from '../services/schedule';

const Schedule = () => {

    return <>
        <div className='p-grid' style={{ alignItems: 'center' }}>
            <div className="p-col-2">
                <img style={{ width: 32 }} alt="Card" src={`${process.env.PUBLIC_URL}/images/clock.svg`} />
            </div>
            <div className="p-col-6 p-0">
                <p className='font-weight-bold'>Schedule Callback</p>
            </div>
        </div>
        <div className='border-1 align-between p-1 mb-min'>
            <div className='align-middle'>
                <i className="fa fa-calendar-minus-o">&nbsp;</i>
                Select Date
            </div>
            <div className='align-middle'>
                <i className="fa fa-clock-o">&nbsp;</i>
                Select Date
            </div>
        </div>
        <div>
            {
                getScheduleCallbacks().map((sc, i) => <div key={i} className='p-grid font-weight-bold'>
                    <div className='p-col-1'>
                        <i className="fa fa-calendar-minus-o">&nbsp;</i>
                    </div>
                    <div className='p-col-4'>
                        <span>{sc.date}</span>
                    </div>
                    <div className='p-col-5'>
                        <span>{sc.time}</span>
                    </div>
                    <div className='p-col-1'>
                        <i className="fa fa-pencil">&nbsp;</i>
                    </div>
                    <div className='p-col-1'>
                        <i className="fa fa-trash-o">&nbsp;</i>
                    </div>
                </div>)
            }
        </div>
    </>
}

export default Schedule;