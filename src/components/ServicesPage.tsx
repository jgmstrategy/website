import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import { expertiseType } from '@/constants/categories';
import { insightType } from '@/constants/insights';
import CategoryPage from './CategoryPage';

type TabData = {
  header: string;
  description: JSX.Element;
};

type ServicesPageProps = {
  name: string;
  backgroundImage: string;
  subtitle: string;
  testimonials: Array<insightType>;
  featuredInsights: Array<insightType>;
  experience: JSX.Element;
  description?: JSX.Element;
  featuredPartners?: Array<string>;
  featuredServices?: Array<expertiseType>;
  moreInfoTabs?: Array<TabData>;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ServicesPage(props: ServicesPageProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const DEFAULT_TABS: Array<TabData> = [
    {
      header: 'Soon',
      description: <></>
    }
  ];

  const tabs: Array<TabData> = props.moreInfoTabs ? props.moreInfoTabs : DEFAULT_TABS;

  return (
    <CategoryPage
      name={props.name}
      backgroundImage={props.backgroundImage}
      subtitle={props.subtitle}
      testimonials={props.testimonials}
      featuredInsights={props.featuredInsights}
      experience={props.experience}
      description={props.description}
      featuredPartners={props.featuredPartners}
      featuredServices={props.featuredServices}
      pageType='service'
    >
      <Container maxWidth='xl' sx={{ paddingY: '2rem' }}>
        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '30vh' }}
        >
          <Tabs
            orientation='vertical'
            variant='scrollable'
            value={value}
            onChange={handleChange}
            aria-label='Vertical tabs example'
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            {
              tabs.map(function ({ header, description }, index) {
                return (
                  <Tab label={header} key={index} {...a11yProps(index)} />
                );
              })
            }
          </Tabs>
          {
            tabs.map(function ({ header, description}, index) {
              return (
                <TabPanel value={value} index={index} key={index}>
                  {description}
                </TabPanel>
              );
            })
          }
        </Box>
      </Container>
    </CategoryPage>
  );
}