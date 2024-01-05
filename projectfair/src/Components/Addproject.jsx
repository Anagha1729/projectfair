import React,{useState} from 'react'
import { Modal,Button,form, } from 'react-bootstrap'

function Addproject() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <form>
        <div className='row'>
            <div className='col-lg-6'>
                <label htmlFor="Project" className='text-center'>
                    <input type='file' id='project' style={{display:'none'}}/>
                    <img src='https://www.pngmart.com/files/7/Gallery-PNG-Transparent-Image.png' alt='gallery' className='img-fluid'></img>
                    </label>
                     </div>
                     <div className='col-lg-6'>
                        <input type='text' placeholder='Project Title' className='form-control mb-2 rounded'/>
                        
                        <input type='text' placeholder='Project Overview' className='form-control mb-2 rounded'/>
                        
                        <input type='text' placeholder='Languages Used' className='form-control mb-2 rounded'/>
                        
                        <input type='text' placeholder='Github URL' className='form-control mb-2 rounded'/>

                     </div>
                     <input type='text' placeholder='Demo URL'  className='form-control mb-2 rounded'  />
                         </div>

       </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addproject