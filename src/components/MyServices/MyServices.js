import React, { useState, useEffect } from 'react';
import { Heading, Text } from '../styles/Component.styles';
import { Container } from '../styles/Container.styles';
import { ServiceCard, ServicesContainer } from '../styles/Services.styles';

const MyServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./myService.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Container>
            <Heading textAlign='center' fontSize='5rem'>My <Text color='#2DC653'>Services</Text> </Heading>
            <hr className='line-break' />
            <ServicesContainer>

                {
                    services.map((service, index) => {
                        return (
                            <ServiceCard key={index} data-aos="zoom-in">
                                <div className='service-icon-box'>
                                    <img className='service-icon' src={service.img} alt="" />
                                </div>
                                <h3>{ service.title}</h3>
                                <p>{service.description }</p>
                            </ServiceCard>)
                    })
                }
            </ServicesContainer>
        </Container>
    );
};

export default MyServices;