import { useState } from "react"

export const Passengers = ({ state, send }) => {
    const [ value, setValue ] = useState('')

    const goToTickets = () => {
        send({ type: 'DONE'})
    }

    const onChangeInput = (event) => {
        changeValue(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault()

        setValue('')
    }

    return (
        <form onSubmit={ submit }>
            <p>Agrega a las personas que van a volar 👨🏻‍🦱</p>

            <input 
                id='name'
                name="name"
                type="text"
                placeholder="Nombre Completo"
                required
                value={ value }
                onChange={ onChangeInput }
            />

            <div>
                <button type="submit">Agregar pasajero</button>

                <button onClick={ goToTickets } type="submit">Ver mi ticket</button>
            </div>
        </form>
    )
}