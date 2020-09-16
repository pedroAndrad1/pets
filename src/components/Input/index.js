import React, { forwardRef } from 'react';
import { Container, Error, Label, StyledInput } from './styles';


/**
 * O component repassa a ref vinda para o input. Estou desestruturando as props no primeiro parametro
 * do forwardRef. O segundo parametro e a ref recebida.
 */


const Input = forwardRef( ({ name, label, noLabel, noError, error, as, referencia, ...props}, ref) => (
    
        <Container >
            {
                noLabel? 
                 <Label htmlFor={name} style={{display: "none"}}>{label}</Label>
                 :
                 <Label htmlFor={name}>{label}</Label>
            }
            <StyledInput ref={ref} as={as} id={name} name={name} {...props} />
            {
               (!noError && error ) && <Error>{error}</Error>
            }
        </Container>

    )
 )
export default Input;