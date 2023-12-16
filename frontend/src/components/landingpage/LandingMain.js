import React from 'react'
import Header from './Header'
import Form from './Form'

const LandingMain = () => {
  return (
    <div>
      <div className="container-fluid">
         <div className="col-12">
            <Header/>
         </div>
         <div className="row">
          <div className="col-6">
            <Form/>
          </div>
         </div>
      </div>
    </div>
  )
}

export default LandingMain
