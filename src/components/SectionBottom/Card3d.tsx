import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import './styleSection3d.scss'

const Card3d = () => {
  return (
    <Container>

        <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={4}>

            <div className="card">
                    <div className="cover item-b">
                        <h1 style={{textAlign: "center"}}> پیشخوان <br />خدمات شهری</h1>
                        {/* <span className="price">$35</span> */}
                        <div className="card-back" style={{backgroundColor: 'transparent'}}>
                            <a> ورود به پیشخوان شهرداری</a>
                        </div>
                    </div>
                </div>

            </Grid>            
            <Grid xs={12} sm={6} md={4}>
            <div className="card" >
				<div className="cover item-c">
					<h1 style={{textAlign: "center"}}>  تجربه <br />زندگی در اهواز</h1>
                    {/* <h1> تجربه <br /> زندگی در اهواز </h1> */}
					{/* <span className="price">$74</span> */}
					<div className="card-back">
						<a> دلایل زندگی در اهواز </a>
					</div>
				</div>
			</div>
 
            </Grid>           
             <Grid xs={12} sm={6} md={4}>
            <div className="card">
				<div className="cover item-a">
					<h1  style={{textAlign: "center"}}> لذت  <br /> اهواز گردی </h1>
					{/* <span className="price">$155</span> */}
					<div className="card-back">
						<a> لیست مکان های گردشگری</a>
					</div>
				</div>
			</div>

            </Grid>
        </Grid>

    </Container>


  )
}

export default Card3d




