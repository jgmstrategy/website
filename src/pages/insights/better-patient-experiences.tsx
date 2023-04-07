import Typography from '@mui/material/Typography';

import InsightPage from '../../components/InsightPage';

export default function BetterPatientExperiences() {
  return (
    <InsightPage
      title='Better Patient Experiences'
      image='/insights/better-patient-experiences.jpg'
      description='Keeping the stress levels at an all-time low'
      subheader='Healthcare Insight'
    >
      <Typography sx={{ paddingY: '1rem' }}>
        Going to the dentist can be a stressful experience for many patients,
        but it doesn&apos;t have to be. One way that dental practices can improve
        the patient experience is by adding WiFi to their waiting rooms.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        In today&apos;s connected world, WiFi is a standard amenity that many
        people expect when they visit public places like coffee shops, airports,
        and hotels. By offering WiFi in the waiting room, dental practices
        can provide a more comfortable and convenient experience for patients.
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        Here are some ways that WiFi can improve the patient experience at
        the dentist&apos;s office:
      </Typography>
      <ul>
        <li>
          <Typography>
            <Typography sx={{ fontWeight: 500 }}>
              Entertainment:
            </Typography>
            Waiting for a dental appointment can be boring, especially for children.
            Offering WiFi can provide patients with access to a wide range of
            entertainment options, such as streaming videos, playing games,
            or reading e-books. Patients can use their own devices or use
            tablets provided by the practice.
          </Typography>
        </li>
        <li>
          <Typography>
            Productivity: For patients who need to work or catch up on emails,
            WiFi can enable them to be more productive while they wait. This
            can be especially important for busy professionals who may not have
            time to sit in a waiting room for extended periods.
          </Typography>
        </li>
        <li>
          <Typography>
            Education: Some patients may have questions about their dental
            health or specific procedures. Offering WiFi can allow them to
            access educational resources or online forums to learn more about
            their dental health and treatment options.
          </Typography>
        </li>
      </ul>
      <Typography>
        Offering WiFi in the waiting room can provide patients with access
        to a wealth of educational resources related to their dental health
        and treatment options. Patients may have questions about their dental
        health or specific procedures, and having access to reliable online
        resources can help them understand their condition and treatment options
        better.
      </Typography>
    </InsightPage>
  );
}