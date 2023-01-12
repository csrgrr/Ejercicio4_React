import { useState } from 'react'
import VariableComponent from './VariableComponent'

let texto = VariableComponent()
function generadorDeText(textoAEscribir){
    return textoAEscribir
}
function FunctionComponent() {

    return(
        <h1>{generadorDeText(texto)}</h1>
    )
}

export default FunctionComponent
