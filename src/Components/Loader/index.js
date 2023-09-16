import React from 'react'
// import CircularProgress from '@mui/material/CircularProgress';
import './style.css'

function Loader() {
  return (
    <div className='loader-bar'>
        {/* <CircularProgress sx={{color:"rgb(5,5,41)"}}/> */}
        <img src="https://www.stackbox.xyz/wp-content/uploads/2023/02/giff.gif" alt="Loader"></img>
    </div>
  )
}

export default Loader;