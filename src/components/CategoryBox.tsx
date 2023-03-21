import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { categoryType } from '../constants/categories';

export default function CategoryBox({ name, href, desc }: categoryType) {
  return (
    <Grid item xs={4}>
      <Link href={href}>
        <Paper sx={{ padding: '1rem', margin: '1rem' }}>
          <Stack direction='row' justifyContent='space-between'>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 600,
                paddingBottom: '1rem'
              }}
            >
              {name}
            </Typography>
            <ChevronRightIcon />
          </Stack>
          <Typography
            sx={{
              fontSize: 14
            }}
          >
            {desc}
          </Typography>
        </Paper>
      </Link>
    </Grid>
  );
}