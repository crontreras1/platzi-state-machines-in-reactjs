import { createMachine } from 'xstate';

const bookingMachine = createMachine({
  id: 'Buy Plane Tickets',
  initial: 'start',
  states: {
    start: {
      on: {
        START: 'search'
      }
    },
    search: {
      on: {
        CONTINUE: 'passengers',
        CANCEL: 'start'
      }
    },
    passengers: {
      on: {
        DONE: 'tickets',
        CANCEL: 'start'
      }
    },
    tickets: {
      on: {
        FINISH: 'start'
      }
    }
  }
})

export default bookingMachine;