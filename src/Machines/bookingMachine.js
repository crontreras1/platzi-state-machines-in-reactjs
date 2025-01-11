import { createMachine } from 'xstate';

const bookingMachine = createMachine({
  id: 'Buy Plane Tickets',
  initial: 'initial',
  states: {
    initial: {
      on: {
        START: 'search'
      }
    },
    search: {
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
  }
})

export default bookingMachine;