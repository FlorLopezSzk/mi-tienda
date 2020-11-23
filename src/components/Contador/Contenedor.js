import React, { useState } from 'react'
import Contador from '../Contador/Contador'
import '../Contador/Contenedor.css'

export default function ContenedorComtador({min, max}) {

    const [contador, setContador] = useState(0)

    const calculo = (signo) => {
        if ( (signo === '+') && ((contador < max)) ) setContador(contador+1)
        else if ( (signo === '-') && (contador > min) ) setContador(contador-1)
    }

    return (
        <Contador contador={contador} calculo={calculo} />
    )
}
