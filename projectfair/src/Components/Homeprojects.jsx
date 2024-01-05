import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

function Homeprojects() {
  return (
    <div className='p-5'>
        <Row>
            <Col sm={12} md={6} lg={4}>
         <ProjectCard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
         <ProjectCard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
         <ProjectCard/>
            </Col>
        </Row>
       

    </div>
  )
}

export default Homeprojects