import React from 'react'

const form = () => {
  return (
    <div  className='parent_form_div'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>Level up your Brand</h2>
            <p className='mt-2' style={{ 'color': '#d23cc' }}>You can reach us anytime at ankit@gmail.com</p>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-md-12 d-flex flex-column'>
            <label className='form-label text-dark'>Name</label>
            <input type={'text'} className="form-input"></input>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-md-12 d-flex flex-column'>
            <label className='form-label text-dark'>Email</label>
            <input type={'text'} className="form-input"></input>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-md-12 d-flex flex-column'>
            <label className='form-label text-dark'>Phone Number</label>
            <input type={'text'} className="form-input"></input>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-md-12 d-flex flex-column'>
            <label className='form-label text-dark'>How can we Help?</label>
            <textarea rows={'3'} className='form-input'></textarea>
          </div>
        </div>
          <div className='col-md-6'>
            <p>Services</p>
            <div className="check_box">
              <div className='col-md-12'>
                <input type={'checkbox'}></input>
                <span className='ms-2'>Website Design</span>
              </div>
              <div className='col-md-12'>
                <input type={'checkbox'}></input>
                <span className='ms-2'> Ux Design</span>
              </div>

              <div className='col-md-12'>
                <input type={'checkbox'}></input>
                <span className='ms-2'> User Resarch</span>
              </div>
    
              <div className='col-md-12'>
                <input type={'checkbox'}></input>
                <span className='ms-2'> Content Creation</span>
              </div>

              <div className='col-md-12'>
                <input type={'checkbox'}></input>
                <span className='ms-2'> Strategy & Consulting</span>
              </div>

              <div className='col-md-12'>
                <input type={'checkbox'}></input>
                <span className='ms-2'> Others</span>
              </div>

            </div>
          </div>

         <div className="button_div mt-3">
             <button style={{
              border:"none",
              padding:"0.5rem",
              width:"100%",
              color:"white",
              backgroundColor:"black",
              borderRadius:"7px",
              fontWeight:500
             }}>Get started</button>
         </div>
  
      </div>
    </div>
  )
}

export default form