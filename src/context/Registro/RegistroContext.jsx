import React, {createContext, useState} from 'react';
import { useEffect } from 'react';
	export const RegistroContext = createContext();
 
//Provider es donde se encuentran las funciones y state
const RegistroProvider = (props) => {
	//creamos el state del context
	const [step, setStep] = useState(parseInt(localStorage.getItem('step')) || 0);
	const [countries, setCountries] = useState(null);
	//TODO: Guardar en state/localstorage los valores de los inputs, para cuando vuelves atrás, te guarde el valor. No es requisito, pero no me ha dado tiempo.

	const getCountries = async () => {
		const api = await fetch("https://restcountries.eu/rest/v2/all?fields=name");
		const result = await api.json();
		setCountries(result);
	}

    const staticContent = {
        0 : {
            title : '¡Únete a la comunidad!',
			subtitle : 'Para empezar, dinos que cuenta te gustaría abrir.'
        },
        1 : {
			step : 'PASO 01/03',
			info : 'Personal Info.',
            title : 'Registra tu cuenta individual',
			subtitle : 'Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información',
			form : [
				{name: 'name', label: 'Nombre completo*', type: 'text'},
				{name: 'email', label: 'Correo electrónico*', type: 'email'},
				{name: 'password', label: 'Contraseña*', type: 'password'},
				{name: 'terms', label: 'Acepto los términos y condiciones', type: 'checkbox'}
			],
			submit : 'Registrar cuenta'
		},
        2 : {
			step : 'PASO 02/03',
			info : 'Localización.',
            title : 'Complete Your Profile!',
			subtitle : 'Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información',
			form : [
				{name: 'phone', label: 'Número de teléfono', type: 'number'},
				{name: 'address', label: 'Dirección', type: 'text'},
				{name: 'country', label: 'País de residencia', type: 'select', options: countries},
			],
			submit : 'Guardar y continuar'
		},
        3 : {
			step : 'PASO 03/03',
			info : 'Verificación por tarjeta.',
            title : 'Verifica tu perfil',
			subtitle : 'Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información',
			form : [
				{name: 'card', label: 'Número de tarjeta', type: 'number', pattern: '[0-9]{16}'},
				{name: 'secret', label: 'Código secreto', type: 'number', pattern: '[0-9]{3}'},
			],
			submit : 'Crear cuenta'
        }
    }

	useEffect(() => {
        getCountries();
    });

	useEffect(() => {				//cada vez que se lanza el hook y se modifica step, lo añade al localStorage
        localStorage.setItem('step', step) 
    }, [step]);


	return(
	<RegistroContext.Provider
		value={{		//lo que vaya aquí dentro son valores que van a estar disponibles dentro de los componentes
			step,
			setStep,
            staticContent
		}}
	>
		{props.children} {/*los diferentes componentes del proyecto van a estar dentro de este props.children, para pasarle los datos del provider*/}
	</RegistroContext.Provider>
	)
}
export default RegistroProvider;