import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type TitleDividerProps = {
  title: string;
  id?: string;
};

type IndustryPageProps = {
  name: string;
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
            <Link key={title} href={'#' + title.toLowerCase()}>
              <Button sx={{ color: 'orange' }}>
                {title}
              </Button>
            </Link>
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
        paddingTop: '2rem'
      }}
    >
      {title}
    </Divider>
  );
}

export default function IndustryPage(props: IndustryPageProps) {
  return (
    <>
      <Typography>We hope to display a cool background image here soon.</Typography>
      <Typography>{props.name}</Typography>
      <Typography>{props.subtitle}</Typography>
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
      <Typography>Contact form</Typography>
    </>
  );
}