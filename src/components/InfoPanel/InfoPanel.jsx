import React from 'react'
import './InfoPanel.css'
import imgComillas from '../../assets/icons/comillas.png'
import imgEsquina from '../../assets/icons/esquina.png'

function InfoPanel() {
    return (
        <div className="infoPanel">
            <div className="infoPanel--content">
                <img src={imgComillas} alt="nuwe" />
                <p>Nuwe es la plataforma que convierte el desarrollo profesional, la búsqueda de trabajo y las conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...</p>
                <img src={imgEsquina} alt="nuwe quote" className="iconEsquina" />
            </div>
        </div>
    )
}

export default InfoPanel
