import React, { Fragment } from 'react'
import Logo from '../../Assets/Sendpage/LogoPng.png';
import classes from './Form.module.css'

const Form = () => {
   return (
      <Fragment>
         <form action="" className={classes.dataForm}>
            <img src={Logo} className={classes.logo} alt="" srcset="" />
            <div class="form-group d-flex p-2">
               <label className='form-label' for="formGroupExampleInput">Item Name</label>
               <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
            <div class="form-group d-flex p-2">
               <label className='form-label' for="formGroupExampleInput2">Catergory</label>
               <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
            <div class="form-group d-flex p-2">
               <label className='form-label' for="formGroupExampleInput2">Sub Catergory</label>
               <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
            <div class="form-group d-flex p-2">
               <label className='form-label' for="formGroupExampleInput2">Quantity</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
            <div class="form-group d-flex p-2">
               <label className='form-label' for="formGroupExampleInput2">Price</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
         </form>
      </Fragment>
   )
}

export default Form
