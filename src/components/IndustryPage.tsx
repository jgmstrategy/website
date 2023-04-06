import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type TitleDividerProps = {
  title: string;
  id?: string;
};

type IndustryPageProps = {
  name: string;
  backgroundImage: string;
  subtitle: string;
  description?: JSX.Element;
};

const navbarTitles = [
  'Experience',
  'Testimonials',
  'Partners',
  'Insights',
  'Services'
];

function InsightNavbar() {
  return (
    <AppBar
      position='static'
      className='d-none d-sm-block'
      sx={{
        background: 'white',
        marginY: '1rem',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar
          variant='dense'
          className='justify-content-center'
          disableGutters
          sx={{
            background: 'white'
          }}
        >
          <Button disabled>
            Skip to Section
          </Button>
          {navbarTitles.map((title) => (
            <Button key={title} sx={{ color: 'orange' }} href={'#' + title.toLowerCase()}>
              {title}
            </Button>
          ))
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function TitleDivider({ title, id }: TitleDividerProps) {
  return (
    <Divider
      id={id}
      sx={{
        fontSize: 30,
        fontWeight: 600,
        paddingTop: '3rem'
      }}
    >
      {title}
    </Divider>
  );
}

export default function IndustryPage(props: IndustryPageProps) {
  return (
    <>
      <div className='bg-image' style={{ height: '40rem', overflow: 'hidden' }}>
        <Image
          src={props.backgroundImage}
          alt=''
          style={{ objectFit: 'cover' }}
          fill
        />
        <div className='mask'>
          <div className='d-flex align-items-center h-100 ps-4'>
            <Paper elevation={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                    Industry Specialization
                  </Typography>
                  <Typography variant='h5' component='div' className='pb-3'>
                    {props.name}
                  </Typography>
                  <Typography variant='body2'>
                    {props.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </div>
        </div>
      </div>
      <InsightNavbar />
      {
        props.description &&
        <Container>
          {props.description}
        </Container>
      }
      <TitleDivider title='Experience' id='experience' />
      <Container>
        <Typography>We hope to put the experience here soon.</Typography>
      </Container>
      <TitleDivider title='Testimonials' id='testimonials' />
      <Container>
        <Typography>We hope to put the testimonials here soon.</Typography>
      </Container>
      <TitleDivider title={'Top Partners in ' + props.name} id='partners' />
      <Container>
        <Typography>We hope to feature team members that are important here soon.</Typography>
      </Container>
      <TitleDivider title={'Latest ' + props.name + ' Insights'} id='insights' />
      <Container>
        <Typography>Featured Insights</Typography>
      </Container>
      <TitleDivider title='How We Help' id='services' />
      <Container>
        <Typography>Specific services we offer</Typography>
      </Container>
      <Container>
        <Typography>Contact form</Typography>
      </Container>
    </>
  );
}