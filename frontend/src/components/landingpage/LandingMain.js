import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Tablemodel from '../Table-Appender/TableModel'

const LandingMain = () => {


  const [dataForm, setdataForm] = useState([])

  const TableData = (formData) => {
    setdataForm((prevData) => {
      return [...prevData, formData];
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="col-12">
          <Header />
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <Form onSubmit={TableData} />
          </div>
          <div className="col-lg-8 col-md-12 col-12 col-sm-12">
            <Tablemodel data={dataForm} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingMain
