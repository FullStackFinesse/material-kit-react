// Pages
import DashboardIcon from "@material-ui/icons/Dashboard";
import ViewDayIcon from "@material-ui/icons/ViewDay";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import AboutUs from "../../pages/LandingPages/AboutUs";
import ContactUs from "../../pages/LandingPages/ContactUs";
import SignIn from "../../pages/LandingPages/SignIn";
import Catalogo from "../../pages/LandingPages/Catalogo";
import Main from "../../pages/Dashboard/Main";

export const publicNavigation = [
  {
    name: "Home",
    icon: <DashboardIcon />,
    path: "/catalogo",
    exact: true,
    component: <Catalogo />,
  },
  {
    name: "Nosotros",
    icon: <HomeIcon />,
    path: "/about-us",
    exact: true,
    component: <AboutUs />,
  },
  {
    name: "Contacto",
    icon: <ViewDayIcon />,
    path: "/contact-us",
    exact: true,
    component: <ContactUs />,
  },
  {
    name: "Login",
    icon: <WorkIcon />,
    path: "/login",
    exact: true,
    component: <SignIn />,
  },
  {
    name: "Collapse",
    icon: <WorkIcon />,
    subRoutes: [
      {
        name: "Subruta",
        icon: <WorkIcon />,
        path: "/login",
        exact: true,

        component: <SignIn />,
      },
      {
        name: "Subruta",
        icon: <WorkIcon />,
        path: "/contact-us",
        exact: true,
        component: <ContactUs />,
      },
    ],
  },
];

export const privateNavigation = [
  {
    name: "Principal",
    icon: <DashboardIcon />,
    path: "/main",
    exact: true,
    component: <Main />,
  },
  {
    name: "permisos",
    icon: <HomeIcon />,
    path: "/about-us",
    exact: true,
    component: <AboutUs />,
  },
  {
    name: "roles",
    icon: <ViewDayIcon />,
    path: "/contact-us",
    exact: true,
    component: <ContactUs />,
  },
  {
    name: "recarito",
    icon: <WorkIcon />,
    path: "/login",
    exact: true,
    component: <SignIn />,
  },
  {
    name: "Collapse",
    icon: <WorkIcon />,
    subRoutes: [
      {
        name: "Subruta",
        icon: <WorkIcon />,
        path: "/login",
        exact: true,

        component: <SignIn />,
      },
      {
        name: "Subruta",
        icon: <WorkIcon />,
        path: "/contact-us",
        exact: true,
        component: <ContactUs />,
      },
    ],
  },
];
