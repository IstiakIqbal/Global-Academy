import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch(`./fakeData.JSON`)
            .then(res => res.json())
            .then(data => setservices(data.slice(0, 4)))
    }, [])
    return (
        <div className="row m-4">
            <h1 className="name m-3">Our Services</h1>
            {
                services.map(service => <Service key={service.name} service={service}></Service>)
            }
        </div>
    );
};

export default Services;