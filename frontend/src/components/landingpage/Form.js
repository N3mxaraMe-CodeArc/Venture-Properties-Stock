import React, { Fragment } from 'react'
import Logo from '../../Assets/Sendpage/LogoPng.png';
import classes from './Form.module.css'

const Form = () => {
  return (
    <Fragment>
      <form action="" className={classes.dataForm}>
         <img src={Logo} alt="" srcset="" />
      </form>
    </Fragment>
  )
}

export default Form
