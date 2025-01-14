import { createMachine } from 'xstate';

const bookingMachine = createMachine({
  id: 'Buy Plane Tickets',
  initial: 'initial',
  states: {
    initial: {
      on: {
        START: {
          target: 'search',
          actions: 'imprimirInicio'
        }
      }
    },
    search: {
      entry: 'impromirEntrada',
      exit: 'imprimirSalida', 
      on: {
        CONTINUE: 'passengers',
        CANCEL: 'initial'
      }
    },
    tickets: {
      on: {
        FINISH: 'initial'
      }
    },
    passengers: {
      on: {
        DONE: 'tickets',
        CANCEL: 'initial'
      }
    }
  },
},
{
  actions: {
    imprimirInicio: () => console.log('Iniciando la compra de boletos'),
    imprimirEntrada: () => console.log('Entrada de la compra de boletos'),
    imprimirSalida: () => console.log('Salida de la compra de boletos')
  }
} 
)

export default bookingMachine;