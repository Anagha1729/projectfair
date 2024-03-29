import React from 'react'
import Header from '../Components/Header'

function Projects() {
  return (

    <div>
      <Header/>
      <div style={{marginTop:'100px'}}>
      <div className='text-center mx-2 mb-3 border rounded'>
        <h3>All Projects</h3>
        <div className='d-flex mt-5 justify-content-center w-100'>
          <div className='d-flex align-items-center border-rounded w-50'>
            <input type='text' placeholder='Enter Keyword/Technology to Search' className='form-control rounded'/>
            <div className='ms-3 p-3'>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
           </div>
          </div>
          <div>

          </div>
        </div>
      </div>
      
      </div>
  )
}

export default Projects