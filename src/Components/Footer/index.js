import React from 'react';
import './style.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";


function Footer() {
    
    const scrollFunc = ()=>{
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }



  return (
    <div className='footer'>
        <h2 onClick={scrollFunc}>easyTodo.</h2>
        <div className='links'>
            <a href='https://facebook.com' className='link'>
                <FacebookIcon/>
            </a>
            <a href='mailto:shameerbem@gmail.com' className='link'>
                <EmailIcon/>
            </a>
            <a href='https://www.twitter.com' className='link'>
                <TwitterIcon/>
            </a>
            <a href='https://www.instagram.com' className='link'>
                <InstagramIcon/>
            </a>
            <a href='https://github.com/ShemeerCoder-01' className='link'>
                <GitHubIcon/>
            </a>
        </div>
    </div>
  )
}

export default Footer