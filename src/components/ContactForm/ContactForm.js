import React from 'react';
import { Heading, SubmitButton, Text } from '../styles/Component.styles';
import { ContactBox, ContactBoxItem, ContactFormContentContainer, ContactFormGroup } from '../styles/ContactForm.styles';
import { Container } from '../styles/Container.styles';

const ContactForm = () => {
    return (
        <Container id='contact'>
            <Heading textAlign='center' fontSize='5rem'>Contact <Text color='#2DC653'>Me</Text> </Heading>
            <hr className='line-break' />
            <ContactFormContentContainer>
                <form>
                    <ContactFormGroup>
                        <input type='text' placeholder='Enter Name' />
                        <input type='email' placeholder='Enter Email' />
                        <input type='text' placeholder='Enter Subject' />
                        <textarea rows="4" cols="50" maxlength="200" type='text' placeholder='Enter Meassage' />
                        <SubmitButton type='submit'>Submit </SubmitButton>
                    </ContactFormGroup>
                </form>
                <ContactBox>
                    <ContactBoxItem>
                        <i class="fad fa-phone-rotary"></i>
                        <h3><a href='tel:+8801844850152'>+8801844850152</a></h3>
                    </ContactBoxItem>
                    <ContactBoxItem>
                        <i class="fad fa-envelope-open"></i>

                        <h3><a href='mailto:antardas2334@gmail.com'>antardas2334@gmail.com</a></h3>
                    </ContactBoxItem>
                    <ContactBoxItem>
                        <i class="fad fa-map-marker-check"></i>
                        <h3>Munshirghata, Raozan, Chittagong, Bangladesh</h3>
                    </ContactBoxItem>
                </ContactBox>
            </ContactFormContentContainer>
        </Container>
    );
};

export default ContactForm;