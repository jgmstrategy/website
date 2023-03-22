import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import '../styles/ProfileFeature.module.css';

const imageWidth = 270;
const imageHeight = 135;

type ProfileFeatureProps = {
  name: string;
  role: string;
  image: string;
};

export default function ProfileFeature({ name, role, image }: ProfileFeatureProps) {
  return (
    <Grid item className='person'>
      <Stack>
        <Image src={image} width={imageWidth} height={imageHeight} alt='' />
        <Typography>{role}</Typography>
        <Typography>{name}</Typography>
      </Stack>
    </Grid>
  );
}