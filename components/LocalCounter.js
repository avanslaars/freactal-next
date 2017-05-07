import React from 'react'
import { provideState, injectState, softUpdate } from 'freactal'

const stateInitializer = {
  initialState: () => ({ localCounter: 0 }),
  effects: {
    localAddOne:  softUpdate(state => ({ localCounter: state.localCounter + 1 }))
  }
}

const wrapInState = provideState(stateInitializer)

export default wrapInState(injectState(({state, effects}) => {
  const handleInput = (evt) => effects.updateMessage(evt.target.value)
  return (
    <div>
      <div>
        Parent Counter Value: {state.counter}
        <br />
        <button onClick={effects.addOne}>Increment Parent</button>
      </div>
      <div>
        Local count: {state.localCounter}
        <br />
        <button onClick={effects.localAddOne}>Increment local</button>
      </div>
    </div>
  )
}))
