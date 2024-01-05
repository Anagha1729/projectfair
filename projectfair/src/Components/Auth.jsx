import { button } from 'bootstrap'
import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Auth({register}) {
    const registerForm=register?true:false
  return (
    <div style={{width:'100%',height:'100vh'}}className='d-flex justify-content-center align-items-center'>
        <div className='container w-75'>
            <Link to={'/'} style={{textDecoration:'none'}} className='d-flex-items-center'>
            <i class="fa-solid fa-arrow-left"></i>
            Back to Home
            </Link>
            <div className='bg-success p-5 rounded'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <img src='https://th.bing.com/th/id/OIP.cn-oPOC6O-FsEMvLRj5KbwHaGi?pid=ImgDet&w=200&h=176&c=7&dpr=1.3' alt='img'></img>
                    </div>
                    <div className='col-lg-6'>
                        <div className='d-flex align-items-center flex-column'>
                            <div className='d-flex  mt-2 text-light'>
                            <i class="fa-solid fa-diagram-project fa-xl" style={{color:' #1c5ca0;'}}></i>
                            <span className='h1 fw-bolder'>Project Fair</span>
                            </div>
                            <h4 className='text-light'>
                                {
                                    registerForm?'Sign Up for Project Fair':'Sign in for Project Fair'
                                }
                                </h4>
                                <Form className='w-100 text-light'>
                                    {
                                        registerForm&&
                                        
                                        <Form.Group className="mb-3" controlId="exampleForm.UsernameInput">
                                          <Form.Label>Username</Form.Label>
                                          <Form.Control type="text" placeholder="Enter your Name" />
                                        </Form.Group>
                                          }
                                        <Form.Group className="mb-3" controlId="exampleForm.UsernameInput">
                                          <Form.Label>Email address</Form.Label>
                                          <Form.Control type="email" placeholder="Enter Your email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.UsernameInput">
                                          <Form.Label>Password</Form.Label>
                                          <Form.Control type="email" placeholder="Enter Your Password" />
                                        </Form.Group>
                                          {
                                            registerForm?
                                            <div>
                                              <button className='btn-btn-primary'>Sign Up</button>
                                              <Link to={'/login'}className='ms-3'>Already a User?Sign In</Link>
                                            </div>:
                                            <div>
                                            <button className='btn-btn-primary'>Sign In</button>
                                            <Link to={'/Register'} className='ms-3'>New User?Sign Up..</Link>
                                            </div>
                                          }
                                       
 
                              </Form>                 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Auth