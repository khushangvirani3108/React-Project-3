import React from 'react'

const Footer = () => {
    let mystyle={
        position: "relative",
        width: "100%",
        top: "100vh"
    }
    
  return (
    <footer className='bg-dark text-light py-3' style={mystyle}>
        <p className='text-center'>
            Copyright &copy; mytodolist.com
        </p>
    </footer>
  )
  }

export default Footer
