import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Tablemodel from '../Table-Appender/TableModel'
import Search from '../Table-Appender/Search'

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
            <div className="row mt-4">
              <hr />
              <div className="col-6">
                <h5 className="text-center text-uppercase text-bg-secondary p-2">Venture Properties Stock Table</h5>
              </div>
              <div className="col-6">
                <Search/>
              </div>
            </div>
            <br />
            <Tablemodel data={dataForm} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingMain
