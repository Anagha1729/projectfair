import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Myproject from '../Components/Myproject'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <div>
      <Header inDashboard={true}/>
      <Row style={{marginTop:'100px'}}>
        <Col sm={12} md={8}>
          <h1>Welcome<span className='text-danger'>User</span></h1>
          <Myproject/>
          </Col>
          <Col sm={12} md={4}>
            <Profile/>
          </Col>       
         
      </Row>
    </div>
  )
}

export default Dashboard