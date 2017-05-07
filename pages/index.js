import React, {Component} from 'react'
import Nav from '../components/Nav'
import PageWrapper from '../components/PageWrapper'
import withState from '../store'
import LocalCounter from '../components/LocalCounter'

export default withState(({state, effects}) => (
    <PageWrapper>
      <Nav />
      This is the home page {`counter is ${state.counter}`}
      <br />
      <button onClick={effects.addOne}>Add one</button>
      <hr />
      <LocalCounter />
    </PageWrapper>
  ))
