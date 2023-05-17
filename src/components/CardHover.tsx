import { Typography } from '@mui/material'
import React from 'react'
import JsonAnimate from './JsonAnimate'
import './output.css'

const CardHover = ({icon, title , description} :any) => {
  return (
    <div className="nft">
    <div className='main'>

    <div className="image">
        {icon}

        {/* <img className='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" /> */}
    </div>

      {/* <h2 style={{textAlign: "center"}}> {title} </h2> */}
      <Typography style={{marginTop: "16px"}}  variant='h5' fontFamily={"Lalezar"}> {title} </Typography>
      {/* <p className='description'> {description} </p> */}
      <Typography style={{marginTop: "24px"}} variant="caption"> {description} </Typography>
      {/* <div className='tokenInfo'>
        <div className="price">
          <ins></ins>
          <p></p>
        </div>
        <div className="duration">
          <ins></ins>
          <p></p>
        </div>
      </div> */}


    </div>
  </div>  

  )
}

export default CardHover