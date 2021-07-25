import { useState } from 'react';
import { getHistory } from '../services/interactionHistory';

const InteractionHistory = () => {
    const [data] = useState(getHistory());
    return <table className='w-100'>
        <thead>
            <tr>
                <td></td>
                <td className='mb-min'>Interaction History</td>
                <td className='text-center mb-min'>Date</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((d, i) => (
                    <tr key={i}>
                        <td className='p-1'><i style={{color: 'var(--base-color3)'}} className={`fa fa-${d.icon}`}></i></td>
                        <td className='p-1'>{d.label}</td>
                        <td className='p-1 text-center'>{d.date}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
}

export default InteractionHistory;