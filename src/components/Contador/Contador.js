import React, { Fragment } from 'react'
import { Button } from 'reactstrap'
import { useState } from 'react';

function Contador({contador, calculo}) {
    return (
        <div className='count'>
            <Button variant="danger" className='mr-4' onClick={()=>calculo("-")} > - </Button>
            <div>
                {contador}
            </div>
            <Button variant="success" className='ml-4' onClick={()=>calculo("+")}> + </Button>
        </div>
        
    )
}

export default Contador;