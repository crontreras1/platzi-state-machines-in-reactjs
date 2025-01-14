import { useMachine } from "@xstate/react";
import bookingMachine from "../Machines/bookingMachine";
import { Nav } from "../Components/Nav";
import { StepsLayout } from "./StepsLayout";

export const BaseLayout = () => {
    const [ state, send ] = useMachine(bookingMachine)

    console.log('nuestra maquina', state.value, state.context)

    return (
        <div>
            <Nav state={ state } send={ send } />

            <StepsLayout state={ state } send={ send }/> 
        </div>
    )
};