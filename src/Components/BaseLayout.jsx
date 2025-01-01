import { useMachine } from "@xstate/react";
import bookingMachine from "../Machines/bookingMachine";

export const BaseLayout = () => {
    const [ state, send ] = useMachine(bookingMachine);
    console.log('nuestra máquina de estados', state.value);
    return (
        <div>Base Layout</div>
    )
};