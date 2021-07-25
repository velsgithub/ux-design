import { useState } from 'react';
import { getHistory } from '../services/interactionHistory';

const InteractionHistory = () => {
    const [data] = useState(getHistory());
    return <table>
        <thead>
            <tr>
                <td></td>
                <td>Interaction History</td>
                <td>Date</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((d, i) => (
                    <tr>
                        <td><i className={`fa fa-${d.icon}`}></i></td>
                        <td>{d.label}</td>
                        <td>{d.date}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
}

export default InteractionHistory;