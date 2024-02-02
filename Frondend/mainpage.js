import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const Mainpage = () => {
  return (
    <div>
      <Link to="/Login"><Button >Login</Button></Link>
      <Link to="/Register"><Button >Register</Button></Link>
    </div>
  )
}

export default Mainpage
