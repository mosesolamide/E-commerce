import React from 'react'
import { useLocation } from 'react-router-dom'

export default function PreviewProduct(){
    const location = useLocation()
    const product = location.state
    console.log(product)
    return(
        <h1>hello more!!!</h1>
    )
}