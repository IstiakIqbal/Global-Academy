import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch(`./fakeData.JSON`)
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
    return (
        <div>
            {
                services.map(service => <Service service={service} key={service.name}></Service>)
            }
        </div>
    );
};

export default Services;