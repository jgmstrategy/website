import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { categoryType } from '../constants/categories';

export default function CategoryBox({ name, href, desc }: categoryType) {
  return (
    <Grid item xs={4}>
      <Link href={href}>
        <Paper sx={{ padding: '1rem', margin: '1rem' }}>
          <Typography
            sx={{
              fontWeight: 600,
              paddingBottom: '1rem'
            }}
          >
            {name}
          </Typography>
          <p>{desc}</p>
        </Paper>
      </Link>
    </Grid>
  );
}