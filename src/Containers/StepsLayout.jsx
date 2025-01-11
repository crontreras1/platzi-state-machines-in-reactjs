import { Passengers } from "../Components/Passengers"
import { Search } from "../Components/Search"
import { Tickets } from "../Components/Tickets"
import { Welcome } from "../Components/Welcome"

export const StepsLayout = ({ state, send }) => {
    const renderContent = () => {
        if(state.matches('initial')) {
            return <Welcome send={ send } /> 
        }

        if(state.matches('search')) {
            return <Search send={ send } /> 
        }

        if(state.matches('tickets')) {
            return <Tickets send={ send } /> 
        }

        if(state.matches('passenger')) {
            return <Passengers send={ send } /> 
        }

        return null 
    }

    return (
        <div>
            { renderContent() }
        </div>
    )
}