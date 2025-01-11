export const Welcome = ({ send }) => {
    const startBooking = () => {
        send({ type: 'START' })
    }

    return (
        <div>
            <p>¡Hoy es el día</p>

            <p>Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender las maravillas que hay para explorar</p>

            <button onClick={ startBooking }>Comenzar</button>
        </div>
    )
}