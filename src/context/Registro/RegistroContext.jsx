import React, {createContext, useState} from 'react';
import { useEffect } from 'react';
	export const RegistroContext = createContext();
 
//Provider es donde se encuentran las funciones y state
const RegistroProvider = (props) => {
	//creamos el state del context
	const [step, setStep] = useState(localStorage.getItem('step') || 0);
    const staticContent = {
        0 : {
            title : '¡Únete a la comunidad!'
        },
        1 : {
            title : 'Registra tu cuenta individual'
        }
    }

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