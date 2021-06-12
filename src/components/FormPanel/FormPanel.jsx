import React from 'react'
import './FormPanel.css'
import AccountType from '../AccountType/AccountType'

function FormPanel() {
    return (
        <div class="formPanel">
            <div className="formPanel--header">
                <p>¿Ya tienes cuenta? Inicia sesión</p> {/* TODO LINK */}
            </div>
            <div className="formPanel--content">
                <h1>¡Únete a la comunidad!</h1>
                <p>Para empezar, dinos que cuenta te gustaría abrir.</p>
                <div className="accountTypes">
                    <AccountType icon={'dev'} title={'Developers'} desc={'Cuenta personas para entrar en el mundo dev'} link={'developers'}/>
                    <AccountType icon={'business'} title={'Business'} desc={'Tienes o perteneces a una compañía'} link={'business'} />
                </div>
            </div>
        </div>
    )
}

export default FormPanel
