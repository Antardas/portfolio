import React from 'react';
import { Heading, Text } from '../styles/Component.styles';
import { Container } from '../styles/Container.styles';

const Blogs = () => {
    return (
        <Container id='blogs'>
            <Heading textAlign='center' fontSize='5rem'>Contact <Text color='#2DC653'>Me</Text> </Heading>
            <hr className='line-break' />
        <h3 className='green__text'>Blogs Comming soong</h3>
        </Container>
    );
};

export default Blogs;