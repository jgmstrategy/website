import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

type TitleDividerProps = {
  title: string;
};

type IndustryPageProps = {
  name: string;
  subtitle: string;
  description: JSX.Element;
};

function TitleDivider({ title }: TitleDividerProps) {
  return (
    <Divider
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
      <Typography>We hope to have a quick navbar here later</Typography>
      <Container>
        {props.description}
      </Container>
      <TitleDivider title='Experience' />
      <Container>
        <Typography>We hope to put the experience here soon.</Typography>
      </Container>
      <Divider
        sx={{
          fontSize: 30,
          fontWeight: 600,
          paddingTop: '2rem'
        }}>
        Testimonials
      </Divider>
      <Container>
        <Typography>We hope to put the testimonials here soon.</Typography>
      </Container>
      <TitleDivider title={'Top Partners in ' + props.name} />
      <Container>
        <Typography>We hope to feature team members that are important here soon.</Typography>
      </Container>
      <Divider
        sx={{
          fontSize: 30,
          fontWeight: 600,
          paddingTop: '2rem'
        }}>
        Latest {props.name} Insights
      </Divider>
      <Container>
        <Typography>Featured Insights</Typography>
      </Container>
      <Container>
        <Typography>Specific services we offer</Typography>
      </Container>
      <Typography>Contact form</Typography>
    </>
  );
}