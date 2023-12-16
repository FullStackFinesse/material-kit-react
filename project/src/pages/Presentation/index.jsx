// Material Kit 2 React components
import Box from '@mui/material/Box';

import DefaultNavbar from '../../components/Navbars/DefaultNavbar';

// Routes
import routes from '../../routes';

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'info',
        }}
        sticky
      />
      <Box
        style={{
          miniHeight: '70vh',
          width: '100%',
          backgroundColor: 'rgba(255,255,255,0.8)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid red',
        }}
      ></Box>
    </>
  );
}

export default Presentation;
