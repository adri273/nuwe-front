import React, { useContext } from 'react'
import {RegistroContext} from '../../context/Registro/RegistroContext';
import './FormPanel.css'
import AccountType from '../AccountType/AccountType'
import { Link } from "wouter";  /* TODO: Falta página de login, para utilizar el Link. Pero lo dejo igualmente. */

function FormPanel() {

    const {step, staticContent} = useContext(RegistroContext);


    return (
        <div className="formPanel">
            <div className="formPanel--header">
                <p>{step}¿Ya tienes cuenta? <Link href="/login"><a href="/" className="link">Inicia sesión</a></Link></p> {/* TODO LINK */}
            </div>
            <div className="formPanel--content">
                <h1>{staticContent[step].title}</h1>
                <p>Para empezar, dinos que cuenta te gustaría abrir.</p>
                <div className="accountTypes">
                    <AccountType icon={'dev'} title={'Developers'} desc={'Cuenta personas para entrar en el mundo dev'} />
                    <AccountType icon={'business'} title={'Business'} desc={'Tienes o perteneces a una compañía'} />
                </div>
            </div>
        </div>
    )
}

export default FormPanel
