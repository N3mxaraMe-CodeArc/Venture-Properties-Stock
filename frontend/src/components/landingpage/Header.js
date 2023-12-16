import React from 'react'
import Button from '@mui/material/Button';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import logo from '../../Assets/Sendpage/LogoPng.png'


const Header = () => {
   return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>
            <h4 className="text-center text-uppercase text-success">Stock Management System</h4>
            <Button variant="outlined" startIcon={<AccountCircleSharpIcon />}>
               Login
            </Button>
         </div>
      </nav>
   )
}

export default Header;