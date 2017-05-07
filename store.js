import { provideState, injectState, softUpdate } from 'freactal'
import { compose } from 'ramda'

/*
This is the key to making this work in Next.
provideState would normally give each wrapped component its own state
By putting the state here, and returning a reference to the same object
from initialState, each page can be wrapped and still reference the
same state object
*/
const init = { counter: 0 }

const stateInitializer = {
  initialState: () => init,
  effects: {
    addOne:  softUpdate(state => ({ counter: state.counter + 1 }))
  }
}

export default compose(provideState(stateInitializer), injectState)
