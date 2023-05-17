import React, { useState, CSSProperties } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactIcon from '@mui/icons-material/ContactPhone';
import { Support, SupportAgent } from '@mui/icons-material';

interface Props {
  backgroundColor: string;
}

function ButtonNavigation(props: Props) {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

//   const bottomNavigationStyle: CSSProperties = {
//     position: 'fixed',
//     bottom: 0,
//     width: '100%',
//     backgroundColor: props.backgroundColor,
//     display : {sm: "none"}
//   };

  return (
    <BottomNavigation value={value} onChange={handleChange} sx={{position: "fixed", bottom: 0, width: "100%", display: {sm: "none"} , backgroundColor: props.backgroundColor}}>
      <BottomNavigationAction label="خانه" icon={<HomeIcon />} />
      <BottomNavigationAction label="علاقمندی" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="پشتیبانی" icon={<SupportAgent />} />
    </BottomNavigation>
  );
}

export default ButtonNavigation;
