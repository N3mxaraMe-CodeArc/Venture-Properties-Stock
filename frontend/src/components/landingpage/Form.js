import React, { Fragment, useRef, useState } from 'react'
import Logo from '../../Assets/Sendpage/LogoPng.png';
import classes from './Form.module.css'
import IInput from './formInput/IInput';

const Form = ({onSubmit}) => {

   const siteName = useRef();
   const category = useRef();
   const subCategory = useRef();
   const Qunatity = useRef();
   const price = useRef();

   const date = new Date();


   const [Total, setTotal] = useState(0);

   const handleChange = () => {
      setTotal(Qunatity.current.value * price.current.value);
   }


   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted");

      const data = {
         sitename: siteName.current.value,
         category: category.current.value,
         subCategory: subCategory.current.value,
         quantity: Qunatity.current.value,
         date: date,
         price: price.current.value,
         total: Total
      }

      console.log(data);
      onSubmit(data);

      siteName.current.value = "";
      category.current.value = "";
      subCategory.current.value = "";
      Qunatity.current.value = "";
      price.current.value = "";
      setTotal(0);
   }


   return (
      <Fragment>
         <form action="" className={classes.dataForm}>
            <img src={Logo} className={classes.logo} alt="" srcset="" />
            <IInput type={"text"} label={"Site name "} currentref={siteName} placeholder={"Enter your Site Name"} />
            <IInput type={"text"} label={"Catergory"} currentref={category} placeholder={"Enter your Catergory"} />
            <IInput type={"text"} label={"Sub Catergory"} currentref={subCategory} placeholder={"Enter the Sub Catergory"} />
            <IInput type={"number"} label={"Quantity"} onChange={handleChange} currentref={Qunatity} placeholder={"Enter your Quantity"} />
            <IInput type={"date"} label={"Current Date"} value={date.toISOString().split('T')[0]} placeholder={"Enter today's date"} disable />
            <IInput type={"number"} label={"Price"} onChange={handleChange} currentref={price} placeholder={"Enter your Price per one"} />
            <div className="row mt-4">
               <div className="col-6">
                  <h5>Total Price : <span>Rs. {Total}</span></h5>
               </div>
               <div className="col-6 d-flex align-content-center justify-content-end">
                  <button onClick={handleSubmit} className="btn btn-primary">
                     Submit
                  </button>
               </div>
            </div>
         </form>
      </Fragment>
   )
}


export default Form;
