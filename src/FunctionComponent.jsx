import { useState } from 'react'
import VariableComponent from './VariableComponent'

let texto = VariableComponent()
function FunctionComponent() {

    return(
        <h1>{texto}</h1>
    )
}

export default FunctionComponent
