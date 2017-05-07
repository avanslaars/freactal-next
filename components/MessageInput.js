import React from 'react'
import { provideState, injectState, softUpdate } from 'freactal'

const stateInitializer = {
  initialState: () => ({ message: 'testing' }),
  effects: {
    updateMessage: softUpdate((state, val) => ({message: val}))
  }
}

const wrapInState = provideState(stateInitializer)

export default wrapInState(injectState(({state, effects}) => {
  const handleInput = evt => effects.updateMessage(evt.target.value)
  return (
    <div>
      <h1>{state.message}</h1>
      <input type='text' onChange={handleInput} value={state.message} />
    </div>
  )
}))
