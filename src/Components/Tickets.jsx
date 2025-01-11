export const Tickets = ({ send, context }) =>  {
    const finish = () => {
        send({ type: 'FINISH'})
    }

    return (
        <div>
            <p>Gracias por volar con book a Fly 💚</p>

            <div>
                <div>Colombia</div>
                <div>
                    <span>🛩️</span>
                </div>
            </div>

            <button onClick={ finish }>Finalizar</button>
        </div>
    )
}