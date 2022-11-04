import Page from '@components/Page';
import { useSettingsContext } from '@components/settings';
import DashboardLayout from '@layouts/dashboard';
import { Card, Container } from '@mui/material';
import ProfileInfo from './ProfileInfo';
import ProfileMenu from './ProfileMenuList';

const PAGE_TITLE = 'Profile';

Profile.getLayout = (page) => <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>;

export default function Profile() {
  const { themeStretch } = useSettingsContext();

  return (
    <Page title={PAGE_TITLE}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Card sx={{ p: 2 }}>
          <ProfileInfo />
          <ProfileMenu />
        </Card>
      </Container>
    </Page>
  );
}
