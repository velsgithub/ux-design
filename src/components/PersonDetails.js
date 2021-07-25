import { useState } from 'react';
import { getPersonDetails } from '../services/person';

const LabelSection = props => {
    return <div className='p-grid'>
        <div className="p-col-4">{props.label}</div>
        <div className="p-col-8">{props.value}</div>
    </div>
}

const PersonDetails = () => {
    const [person] = useState(getPersonDetails());
    return <>
        <h2>Contact</h2>
        <div className='p-grid' style={{ alignItems: 'center' }}>
            <div className="p-col-5">
                <img style={{ width: 150, borderRadius: 20, maxWidth: '100%' }} alt="Card"
                    src={person.profileUrl} />
            </div>
            <div className="p-col-7 p-0">
                <h3 className='m-0 mb-min'>{person.name}</h3>
                <span>{person.mobile}</span>
            </div>
        </div>
        <LabelSection label='Email' value={person.email} />
        <LabelSection label='Address' value={person.address} />
        <LabelSection label='City' value={person.city} />
        <LabelSection label='State' value={person.state} />
        <LabelSection label='Zipcode' value={person.zipCode} />
    </>
}

export default PersonDetails;