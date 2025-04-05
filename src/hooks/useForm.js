import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState( {} );

    useEffect(() => {
        createValidators();
    }, [ formState ]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations ) ) {
            // console.log(formField);
            const [ fn, errorMessage = "El campo es obligatorio" ] = formValidations[ formField ];
            // formCheckedValues[ `${ formField }Valid` ] // Es una propiedad dinamica( Computada )
            formCheckedValues[ `${ formField }Valid` ] = fn( formState[ formField ] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );

        return formCheckedValues;
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
    }
}