import { TextField } from '@mui/material';
import { useState } from 'react';
import { StyledSearchAutocomplated } from '../styles/search.style';

const SearchBox = () => {

  const [options, setOptions] = useState<Array<{ id: number, title: string }>>([]);

  const handleSearch = async (event:any) => {
    // const value = event.target.value;
    // const response = await fetch(`https://api.example.com/search?q=${value}`);
    // const data = await response.json();
    setOptions(data);
  };

  const data = [
    {id: 1, title: 'aref'},
    {id: 2, title: 'ali'},
    {id: 3, title: 'dr'},
    {id: 4, title: 'shompet'},
    {id: 5, title: 'erfan'},
  ]
  return (
    <>

    <StyledSearchAutocomplated
      clearOnEscape
      size='small'
      id="search-box"
      noOptionsText="موردی یافت نشد"
      options={options}
      getOptionLabel={(option:any) => option.title}
      renderInput={(params:any) => <TextField sx={{width: {xs:"130px", sm:"200px", md:"240px"}}} {...params} placeholder="جستجو ..." />}
      onInputChange={handleSearch}
    />

{/*    

    <BoxSearchStyled width={{xs: "150px" , md: "230px", lg: "280px"}}>
      <InputBaseStyled fullWidth placeholder='جستجو ...'/>
      <Search sx={{mr: "8px", color: "black"}}/>
    </BoxSearchStyled>
    */}
</> 
  );
};

export default SearchBox;
