import * as React from 'react';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatePicker } from '@mui/x-date-pickers';
import { faIRPickers } from '../setting/faLocateDate';

export default function PersianDatePicker() {


  return (
    <>
            <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DatePicker sx={{
                backgroundColor: "rgba(255,255,255,0.23)",
                backdropFilter: `blur(10px)`,
          }} localeText={faIRPickers} defaultValue={new Date(2022, 1, 1)} />

        </LocalizationProvider>
    </>




  );
}