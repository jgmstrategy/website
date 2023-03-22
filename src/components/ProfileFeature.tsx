import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import styles from '../styles/ProfileFeature.module.css';

const imageWidth = 270;
const imageHeight = 135;

type ProfileFeatureProps = {
  name: string;
  role: string;
  image: string;
  href: string;
};

export default function ProfileFeature({ name, role, image, href }: ProfileFeatureProps) {
  return (
    <Grid item className={styles.person}>
      <Link href={href}>
        <Stack>
          <Image src={image} width={imageWidth} height={imageHeight} alt='' />
          <Typography
            sx={{
              fontSize: '14px',
              paddingTop: '0.5rem'
            }}
          >
            {role}
          </Typography>
          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: 500,
              color: 'black'
            }}
          >
            {name}
          </Typography>
        </Stack>
      </Link>
    </Grid>
  );
}