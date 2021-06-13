import React, { useContext, useState } from 'react'
import {RegistroContext} from '../../context/Registro/RegistroContext';
import './FormPanel.css'
import AccountType from '../AccountType/AccountType'
import { Link } from "wouter";  /* TODO: Falta página de login, para utilizar el Link. Pero lo dejo igualmente. */
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormPanel() {

    const {step, setStep, staticContent} = useContext(RegistroContext);
    const [email, setEmail] = useState('');

    const Header = (step && step !== '0') ? (
        <div className="formPanel--header-progress">
            <p className="back" onClick={() => setStep(step-1)}><svg xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-chevron-left" viewBox="0 0 16 16"><path fillRule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"/></svg> Volver</p>
            <div>
                <p className="steps">{staticContent[step].step}</p>
                <p>{staticContent[step].info}</p>
            </div>
        </div>
    ) : (
        <p>¿Ya tienes cuenta? <a href="/" className="link">Inicia sesión</a></p>
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if(form.checkValidity() === false) event.stopPropagation();
        (validateEmail(email)) ? nextStep() : showMessage('Parece que el correo electrónico introducido ya está en uso. Por favor, revísalo y vuelve a intentarlo de nuevo.');
    };
    const validateEmail = (email) => {
        return (email === 'email@enuso.com') ? false : true;
    }
    const showMessage = (msg) => {
        alert(msg); /* TODO poner modal */
    }
    const nextStep = () => {
        (step !== 3) ? setStep(parseInt(step)+1) : showMessage('¡Todo guay!'); //TODO: Redirect a area user
    }
    const handleChange = (event) => {
        const input = event.currentTarget;
        if(input.type === 'email') setEmail(input.value);
    }

    const Formulario = (step && step !== '0') ? (
            <Form onSubmit={handleSubmit}>
            {staticContent[step].form && staticContent[step].form.map(input => {
                const renderInput = () => {
                    switch(input.type) {
                        case 'select':
                            return (
                                <Form.Group controlId={input.name}>
                                <Form.Label>{input.label}</Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Selecciona uno</option>
                                    {input.options && input.options.map(country => {
                                        return <option>{country.name}</option>
                                    })}
                                </Form.Control>
                                </Form.Group>
                            ) ;
                        case 'checkbox':
                            return (<Form.Check type="checkbox" label={input.label} variant="alert" required />) ;
                        default:
                            return (
                                <>
                                    <Form.Label>{input.label}</Form.Label>
                                    <Form.Control type={input.type} placeholder={(input.type === 'email') ? 'email@enuso.com' : 'Introduce tu '+input.label} onChange={handleChange} required />
                                </>
                            );
                    }
                }
                return (
                    <Form.Group key={input.name} controlId={input.name}>
                        {renderInput()}
                    </Form.Group>
                )
            })}
            <Button variant="success" type="submit">
                {staticContent[step].submit}
            </Button>
            </Form>
     ) : (
         <div className="accountTypes">
            <AccountType icon={'dev'} title={'Developers'} desc={'Cuenta personas para entrar en el mundo dev'} />
            <AccountType icon={'business'} title={'Business'} desc={'Tienes o perteneces a una compañía'} />
        </div>
     );

    return (
        <div className="formPanel">
            <div className="formPanel--header">
                {Header}
            </div>
            <div className="formPanel--content">
                <h1>{staticContent[step].title}</h1>
                <p>{staticContent[step].subtitle}</p>
                {Formulario}
            </div>
        </div>
    )
}

export default FormPanel
