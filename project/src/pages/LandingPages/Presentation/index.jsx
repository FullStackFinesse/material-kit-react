// Material Kit 2 React components
import Box from '@mui/material/Box';

import DefaultNavbar from '../../../components/Navbars/DefaultNavbar';

// Routes
import routes from '../../../routes';

// Images
import bgImage from '../../../assets/images/bg-presentation.jpg';

const Presentation = () => {
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
        transparent
        relative
        light
        cente
      />
      <Box
        minHeight='75vh'
        width='100%'
        sx={{
          backgroundImage: `url(${bgImage})`,
          // backgroundImage: `radial-gradient(circle at center, rgb(241, 242, 181) 0.00%,rgb(19, 80, 88) 100.00%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'grid',
          placeItems: 'center',
        }}
      ></Box>
    </>
  );
};

export default Presentation;
