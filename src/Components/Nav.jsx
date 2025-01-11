
export const Nav = ({ send, state }) => {
    const goToWelcome = () => {
        send({ type: 'CANCEL' })
    }

    return (
        <nav>
            <h1>Book a fly 🛩️</h1>

            {
                !state.matches('initial') &&
                <button 
                    onClick={ goToWelcome }
                >
                    Cancelar
                </button>
            }
        </nav>
    )
}