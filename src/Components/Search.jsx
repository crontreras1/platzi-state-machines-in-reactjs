import { useState } from "react"

export const Search = ({ send }) => {
    const [ flight, setFlight ] = useState('')

    const goToPassengers = () => {
        send({ type: 'CONTINUE' }, { selectedCountry: flight })
    }

    const handleSelectChange = (event) => {
        setFlight(event.target.value)
    }

    const countries = ['Colombia', 'Perú', 'México', 'Chile', 'Argentina', 'Ecuador']

    return (
        <div>
            <p>Busca tu destino</p>

            <select 
                value={ flight } 
                id="country" 
                onChange={ handleSelectChange }
            >
                <option value="" disabled defaultValue>Escoge un país</option>

                {
                    countries.map(country => <option value={ country } key={ country }>{ country }</option>)
                }
            </select>

            <button onClick={ goToPassengers } disabled={ flight === '' }>Continuar</button>
        </div>
    )
}