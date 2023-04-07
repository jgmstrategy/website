import { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function JobApplicationForm() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box
      component='form'
      autoComplete='off'
      sx={{
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}
    >
      <Stack spacing={2}>
        <Typography>
          Please note, the form is currently under construction. Submissions
          will not be received. If you would like to apply (and maybe help
          us finish this form!), please email us at{' '}
          <Link href='mailto:careers@jgmstrategy.com'>
            careers@jgmstrategy.com
          </Link>
          {' '}instead with your resume.
        </Typography>
        <TextField
          required
          id='name'
          label='Name'
          variant='standard'
        />
        <TextField
          required
          id='email'
          type='email'
          label='Email'
          variant='standard'
        />
        <TextField
          required
          id='phone'
          label='Phone'
          variant='standard'
        />
        <p>Resume</p>
        <Button
          variant='contained'
          component='label'
          sx={{
            maxWidth: 240
          }}
        >
          Upload Resume
          <input type='file' hidden />
        </Button>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='select-work-auth'>US Work Authorization</InputLabel>
          <Select
            labelId='select-work-auth-label'
            id='select-work-auth'
            value={age}
            onChange={handleChange}
            label='US Work Authorization'
          >
            <MenuItem value=''>
              <em>Decline to State</em>
            </MenuItem>
            <MenuItem value='citizen'>U.S. Citizen</MenuItem>
            <MenuItem value='visa'>Green Card/Permanent Resident</MenuItem>
            <MenuItem value='none'>No work authorization</MenuItem>
            <MenuItem value='other'>Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='select-gender'>Gender</InputLabel>
          <Select
            labelId='select-gender-label'
            id='select-gender'
            value={age}
            onChange={handleChange}
            label='Gender'
          >
            <MenuItem value=''>
              <em>Decline to Self Identify</em>
            </MenuItem>
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
            <MenuItem value='other'>Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='select-race'>Race</InputLabel>
          <Select
            labelId='select-race-label'
            id='select-race'
            value={age}
            onChange={handleChange}
            label='Race'
          >
            <MenuItem value=''>
              <em>Decline to Self Identify</em>
            </MenuItem>
            <MenuItem value='white'>White</MenuItem>
            <MenuItem value='black'>Black or African American</MenuItem>
            <MenuItem value='hispanic'>Hispanic or Latino</MenuItem>
            <MenuItem value='asian'>Asian</MenuItem>
            <MenuItem value='american'>American Indian/Alaskan Native</MenuItem>
            <MenuItem value='pacific'>Native Hawaiian or Other Pacific Islander</MenuItem>
            <MenuItem value='twoplus'>Two or More Races</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Container
        className='d-flex justify-content-center'
        sx={{
          paddingTop: '2rem'
        }}
      >
        <Button variant='contained' color='success'>
          Submit Application
        </Button>
      </Container>
    </Box>
  );
}