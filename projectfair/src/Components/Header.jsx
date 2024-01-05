import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({inDashboard}) {
  return (
    <Navbar className="position-fixed top-0 w-100" style={{backgroundColor:'#212dac', zIndex:"1"}}>
    <Container>
        <Link to={'./'} style={{backgroundColor:'none'}}>
      <Navbar.Brand>
      <i class="fa-solid fa-diagram-project fa-xl" style={{color:' #1c5ca0;'}}></i>
 {''}  Project Fair
      </Navbar.Brand>
      </Link>
      {
        inDashboard&&
        <div className='ms-auto btn btn-success'>
          Log Out{''}
          <i class="fa-solid fa-right-long"></i>
        </div>
      }
    </Container>
  </Navbar>
  )
}

export default Header