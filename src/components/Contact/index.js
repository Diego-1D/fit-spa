import React from "react";
import {
    ContactContainer,
    ContactTitle,
    Input,
    InputButton,
    Form, 
    TextArea
} from './styles';

const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <ContactTitle>CONTATE-NOS</ContactTitle>
            <Form>
                <Input type='text' placeholder='Digite o seu nome completo' />
                <Input type='email' placeholder='Digite o seu email' />
                <TextArea placeholder='Escrevar aqui...'></TextArea>
                <InputButton type='submit' value='Enviar'/>
            </Form>
        </ContactContainer>
    );
}

export default Contact;