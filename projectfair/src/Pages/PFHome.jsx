import React, { useState } from 'react'
import{Row,Col} from 'react-bootstrap'
import designerImg from '../Assets/web2.jpg'
import Homeprojects from '../Components/Homeprojects'
import { Link } from 'react-router-dom'

function PFHome() {
  const[isLogged,setIsLogged]=useState(false)
  return (
  <>
  <div className='container-fluid rounded' style={{width:'100%',height:'100vh', backgroundColor:'#212dac'}}>
   
<Row className='align-items-center p-5 h-100'>
    <Col sm={12} md={6}>
        <h1 style={{fontSize:'80px'}} className='text-secondary'>
        <i class="fa-solid fa-diagram-project fa-xl" style={{color:' #1c5ca0;'}}></i>
            Project Fair</h1>
            <p className='mt-3'style={{textAlign:'justify'}}> Stay organized, focused, and in charge. Tackle anything from small projects to large initiatives. You may or may not be a project manager, but now you can be the boss of any project with a powerful, easy-to-use app.</p>
 {
  isLogged?
  <Link to={'/Dashboard'}className='btn-btn-warning'>Manage Your Projects<i class="fa-solid fa-right-long"></i></Link>
  :
  <Link to={'/login'} className='btn-btn-success'>Start to Explore<i class="fa-solid fa-right-long"></i></Link>
 }
 

    </Col>
    <Col ms={12} md={6}>
      <img src={designerImg}className='img-fluid' alt=""/>
    </Col>
</Row>

  </div>
  <div className='my-5'>
    <h1 style={{textAlign:'center'}}>PROJECT</h1>
    <marquee behavior='alternate' direction="">
    <Homeprojects/>
    </marquee>
    <div>
    <Link to={'/projects'}className=' d-flex justify-content-center' >See More</Link>
    </div>
  </div>
  
  </>
  )
}

export default PFHome