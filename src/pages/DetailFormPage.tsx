import { Container, FormControl, RadioGroup, Typography ,Radio, FormControlLabel, Input} from '@mui/material'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { LoadingButton } from '@mui/lab'
import Webcam from "react-webcam";
import { InputBaseForm } from '../styles/Pages/form.page.style'
import { useRef, useState } from 'react'
import PersianDatePicker from '../components/DatePicker'



const DetailFormPage = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [load, setLoad] = useState<Boolean>(false);


    async function handleButtonClick(): Promise<void> {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (err) {
          console.error('Error accessing camera:', err);
        }
      }


  return (
    <Container>
        <Box m={2} sx={{
            backdropFilter: `blur(10px)`,
            borderRadius: "10px",
            padding: "10px"
        }}>
            <Box display={'flex'} justifyContent={"space-between"} sx={{
                flexDirection: {xs: "column" , sm: "row"}
            }}>
            <Box component="div" display="flex" flexDirection={"column"} justifyContent={"space-evenly"} >
            <Typography  variant="h5" sx={{ textShadow: `0px -4px 10px rgba(255,255,255,0.5)` }}> استعلامات </Typography>
            <Typography sx={{ textShadow: `0px -4px 10px rgba(255,255,255,0.5)` }} variant="caption"> اسعلام پروانه بر اساس نوع شخصیت و تاریخ پروانه </Typography>

            </Box>


            <FormControl size="small" sx={{ backgroundColor: "rgba(255,255,255,0.23)", backdropFilter: `blur(10px)`, padding: {xs: "4px" , sm: "6px" , md: "8px"}, borderRadius: "14px" , marginY: {xs: '15px', sm: 'none'} }}>
            <label> نوع گزارش </label>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="حقوقی" control={<Radio />} label="حقوقی" />
                <FormControlLabel value="حقیقی" control={<Radio />} label="حقیقی" />
            </RadioGroup>
            </FormControl>

            </Box>

            <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                    <Box display={"flex"} flexDirection={"column"} >
                        <Typography variant="caption"> شماره پرونده </Typography>
                        <InputBaseForm placeholder="شماره پرونده را وارد کنید" type='text' />

                    </Box>
                </Grid>

                <Grid xs={12} sm={6}>
                    <Box display={"flex"} flexDirection={"column"} >
                        <Typography variant="caption"> بلوک </Typography>
                        <InputBaseForm placeholder="شماره بلوک را وارد کنید" type='text' />

                    </Box>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Box display={"flex"} flexDirection={"column"} >
                        <Typography variant="caption"> ملک </Typography>
                        <InputBaseForm placeholder="اطلاعات ملک را وارد کنید" type='text' />

                    </Box>
                </Grid>

                <Grid xs={12} sm={6}>
                    <Box display={"flex"} flexDirection={"column"} >
                        <Typography variant="caption"> شماره گواهی </Typography>
                        <InputBaseForm placeholder="شماره گواهی را وارد کنید" type='text' />

                    </Box>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Box display={"flex"} flexDirection={"column"} >
                        <Typography variant="caption"> تاریخ  </Typography>
                        <PersianDatePicker />

                    </Box>
                </Grid>                

                          <Grid xs={12} sm={6}>
                    <Box display={"flex"} flexDirection={"column"} >
                        <Typography variant="caption"> تاریخ  </Typography>
                        <Box sx={{                backgroundColor: "rgba(255,255,255,0.23)",
                backdropFilter: `blur(10px)`, height:"55px", display:"flex" , justifyContent:"center", alignItems:"center"}} >
                        <Input fullWidth type='file'/>
                        </Box>


                    </Box>
                </Grid>    

                        <Grid xs={12} sm={6}>
                    <Box display={"flex"} flexDirection={"column"} >
                    <button onClick={handleButtonClick}>Open Camera</button>
                    <video ref={videoRef} autoPlay />
                    </Box>
                </Grid>                

                <LoadingButton loadingIndicator="لطفا صبر کنید"  onClick={() => setLoad(true)} sx={{margin: "10px" }} fullWidth variant="contained"> استعلام  </LoadingButton>
                {/* <LoadingButton loadingIndicator="لطفا صبر کنید" loading={Boolean(load)} onClick={() => setLoad(true)} sx={{margin: "10px" }} fullWidth variant="contained"> استعلام  </LoadingButton> */}


             </Grid>
            
        </Box>
    </Container>
  )
}

export default DetailFormPage