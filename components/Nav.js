import React from 'react'
import Link from 'next/link'

export default (props) => (
  <div>
    <Link href='/'><a>Home</a></Link>{' '}
    <Link href='/other'><a>Other</a></Link>
  </div>
)
