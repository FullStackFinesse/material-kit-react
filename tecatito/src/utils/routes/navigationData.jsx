// Pages
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import AboutUs from '../../pages/LandingPages/AboutUs';
import ContactUs from '../../pages/LandingPages/ContactUs';
import SignIn from '../../pages/LandingPages/SignIn';
import Catalogo from '../../pages/LandingPages/Catalogo';
import Main from '../../pages/Dashboard/Main';
import Administrator from '../../pages/Dashboard/users/Administrator';
import Technician from '../../pages/Dashboard/users/Technician';
import Producer from '../../pages/Dashboard/users/Producer';
import External from '../../pages/Dashboard/users/External';

export const publicNavigation = [
  {
    name: 'Home',
    icon: <DashboardIcon />,
    path: '/catalogo',
    exact: true,
    component: <Catalogo />,
  },
  {
    name: 'Nosotros',
    icon: <HomeIcon />,
    path: '/about-us',
    exact: true,
    component: <AboutUs />,
  },
  {
    name: 'Contacto',
    icon: <ViewDayIcon />,
    path: '/contact-us',
    exact: true,
    component: <ContactUs />,
  },
  {
    name: 'Login',
    icon: <WorkIcon />,
    path: '/login',
    exact: true,
    component: <SignIn />,
  },
  {
    name: 'Collapse',
    icon: <WorkIcon />,
    subRoutes: [
      {
        name: 'FANOR',
        icon: <WorkIcon />,
        path: '/login',
        exact: true,

        component: <SignIn />,
      },
      {
        name: 'MORTIMER',
        icon: <WorkIcon />,
        path: '/contact-us',
        exact: true,
        component: <ContactUs />,
      },
      {
        name: 'STALIN',
        icon: <WorkIcon />,
        path: '/contact-us',
        exact: true,
        component: <ContactUs />,
      },
    ],
  },
  {
    name: 'Collapse2',
    icon: <WorkIcon />,
    subRoutes: [
      {
        name: 'FANOR',
        icon: <WorkIcon />,
        path: '/login',
        exact: true,

        component: <SignIn />,
      },
      {
        name: 'MORTIMER',
        icon: <WorkIcon />,
        path: '/contact-us',
        exact: true,
        component: <ContactUs />,
      },
      {
        name: 'STALIN',
        icon: <WorkIcon />,
        path: '/contact-us',
        exact: true,
        component: <ContactUs />,
      },
    ],
  },
];

export const privateNavigation = [
  {
    name: 'Principal',
    icon: <DashboardIcon />,
    path: '/main',
    exact: true,
    component: <Main />,
  },
  {
    name: 'Administrador',
    icon: <HomeIcon />,
    path: '/admin',
    exact: true,
    component: <Administrator />,
  },
  {
    name: 'Técnico',
    icon: <ViewDayIcon />,
    path: '/technician',
    exact: true,
    component: <Technician />,
  },
  {
    name: 'Productor',
    icon: <WorkIcon />,
    path: '/producer',
    exact: true,
    component: <Producer />,
  },
  {
    name: 'Externo',
    icon: <WorkIcon />,
    path: '/externo',
    exact: true,
    component: <External />,
  },

  {
    name: 'Collapse',
    icon: <WorkIcon />,
    subRoutes: [
      {
        name: 'Subruta',
        icon: <WorkIcon />,
        path: '/externo',
        exact: true,

        component: <External />,
      },
      {
        name: 'Subruta',
        icon: <WorkIcon />,
        path: '/admin',
        exact: true,
        component: <Administrator />,
      },
    ],
  },
];
