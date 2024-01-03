//pages
import Icon from '@mui/material/Icon'
//icon
import DashboardIcon from '@mui/icons-material/Dashboard'
import Main from 'layouts/pages/dashboard-pages/main'
import AboutUs from 'pages/LandingPages/AboutUs'

const privateRoutes = [
  {
    name: 'pages Dashboard',
    icon: (
      <Icon>
        <DashboardIcon />
      </Icon>
    ),
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'DashboardLayout',
        collapse: [
          {
            name: 'Main',
            route: '/pages/dashboard-pages/main',
            component: <Main />,
          },
          {
            name: 'Main',
            route: '/pages/dashboard-pages/main',
            component: <Main />,
          },
          {
            name: 'Main',
            route: '/pages/dashboard-pages/main',
            component: <Main />,
          },
        ],
      },
      {
        name: 'account',
        collapse: [
          {
            name: 'Slir',
            route: '/pages/landing-pages/about-us',
            component: <AboutUs />,
          },
        ],
      },
    ],
  },
]
export default privateRoutes
