import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { StyledAvatar } from '../styles/navbar.style'

const AvatarSection = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <>

    <Tooltip title="تنظیمات حساب کاربری">
      <StyledAvatar
      color='white'
          id="basic-button"
          onClick={handleClick}
      > a </StyledAvatar>
    </Tooltip>

    <Menu
  
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.2,
            backgroundColor: "rgba(255,255,255,0.23)",
            backdropFilter: `blur(10px)`,
            // border: "5px solid red"
          },
        }}

      >

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
            <Typography fontSize={"16px"} color={"rgba(0, 0, 0, 0.6)"}> حساب کاربری </Typography> 
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <Typography fontSize={"16px"} color={"rgba(0, 0, 0, 0.6)"}> لیست گزارشات  </Typography> 
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography fontSize={"16px"} color={"rgba(0, 0, 0, 0.6)"}> خروج </Typography> 
        </MenuItem>
      </Menu>
      </>
  )
}

export default AvatarSection