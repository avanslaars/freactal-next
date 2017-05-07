import { provideState, injectState } from 'freactal'
import { compose } from 'ramda'

const init = { counter: 0 }

const stateInitializer = {
  initialState: () => init,
  effects: {
    addOne: () => state => Object.assign({}, state, { counter: state.counter + 1 })
  }
}

export default compose(provideState(stateInitializer), injectState)
