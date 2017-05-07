import React, {Component} from 'react'
import Nav from '../components/Nav'
import PageWrapper from '../components/PageWrapper'
import withState from '../store'

export default withState(({state, effects}) => (
  <PageWrapper>
    <Nav />
    Other Page! {`counter is ${state.counter}`}<br/>
    <button onClick={effects.addOne}>Add one</button>
  </PageWrapper>
))
