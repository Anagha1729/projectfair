import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className='bg-success' style={{width:'100%',height:'400px',backgroundColor:'#2175ac'}}>
        <Row className='p-5' style={{color:'#1f512b'}}>
          <Col md='4'>
            <h4> <i class="fa-solid fa-diagram-project fa-xl" style={{color:' #1c5ca0;'}}></i>{''}Project Fair</h4>
            <p style={{textAlign:'justify'}}>Stay organized, focused, and in charge. Tackle anything from small projects to large initiatives. You may or may not be a project manager, but now you can be the boss of any project with a powerful, easy-to-use app.
            </p>
          </Col>
         
          <Col md='4' className='d-flex justify-content-center'>
          <div  className='d-flex flex-column' >
            <h4>Link</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'#1f512b'}}>Landing Page</Link>
            <Link to={'/dashboard'}style={{textDecoration:'none',color:'#1f512b'}}>Dashboard</Link>
            <Link to={'/register'} style={{textDecoration:'none',color:'#1f512b'}}>Register</Link>
            <Link to={'/login'} style={{textDecoration:'none',color:'#1f512b'}}>Login</Link>
            <Link to={'/project'} style={{textDecoration:'none',color:'#1f512b'}}>Project</Link>
            </div>
          </Col>
        
          <Col md='4' className='d-flex justify-content-center' >
            <div className='d-flex flex-column'>
            <h4>Guids</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'#1f512b'}}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'#1f512b'}}>React-bootstrap</Link>
            <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'#1f512b'}}>Fontawsome</Link>
            </div>
          </Col>
        </Row>
        <p className='text-center mt-3' style={{color:'#1f512b'}}>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>
      </div>
    </div>
  )
}

export default Footer