import { assign, createMachine } from 'xstate';

const bookingMachine = createMachine({
  id: 'Buy Plane Tickets',
  initial: 'initial',
  // context: {
  //   passengers: [],
  //   selectedCountry: '',
  // },
  states: {
    initial: {
      on: {
        START: {
          target: 'search',
        }
      }
    },
    search: {
      on: {
        CONTINUE: {
          terget: 'passengers',
          actions: assign({
            selectedCountry: (context, event) => event.selectedCountry
          })
        },
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
        CANCEL: 'initial',
        ADD: {
          target: 'passengers',
          actions: assign((context, event) => context.passsenger.push(event.newPassenger))
        }
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