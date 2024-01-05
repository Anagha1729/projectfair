import React,{useState} from 'react'
import {Card,Modal,Row,Col} from 'react-bootstrap'
import projectImg from '../Assets/Screenshot.jpg.png'

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
    <Card onClick={handleShow} style={{ width: '18rem' }} className='rounded border shadow'>
      <Card.Img variant="top" src={projectImg} />
      <Card.Body>
        <Card.Title>Media Player</Card.Title>
         </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Row>
          <Col sm={12} md={6}>
            <img src={projectImg} alt='img'className='img-fluid'></img>
            </Col>
            <Col sm={12} md={6}>

            <h5>Project Title</h5>
            <p>Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people.The development of software for an improved business process, the construction of a building, the relief</p>
          <p><span className='fw-bold'>Languages used:</span> HTML,CSS,JAVA</p>
          <div>
            <a target='_blank' className='btn me-2' href="https://github.com/Anagha1729/mediaplayer.git">
            <i class="fa-brands fa-github"></i>
            </a>

            <a target='_blank' className='btn' href=''>
              <i class="fa-solid fa-link"></i>
             </a>
          </div>
          </Col>
         </Row>
        </Modal.Body>
       
      </Modal>
   </>
  )
}

export default ProjectCard