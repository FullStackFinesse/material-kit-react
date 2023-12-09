// Pages
import DashboardIcon from "@material-ui/icons/Dashboard";
import ViewDayIcon from "@material-ui/icons/ViewDay";
import AboutUs from "../../pages/LandingPages/AboutUs";
import ContactUs from "../../pages/LandingPages/ContactUs";
import SignIn from "../../pages/LandingPages/SignIn";

export const publicNavigation = [
  {
    name: "pages",
    icon: <DashboardIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "sections",
    icon: <ViewDayIcon />,
    collapse: [
      {
        name: "page sections",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "page headers",
            route: "/sections/page-sections/page-headers",
            component: <AboutUs />,
          },
          {
            name: "features",
            route: "/sections/page-sections/features",
            component: <AboutUs />,
          },
        ],
      },
      {
        name: "navigation",
        description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "navbars",
            route: "/sections/navigation/navbars",
            component: <AboutUs />,
          },
          {
            name: "nav tabs",
            route: "/sections/navigation/nav-tabs",
            component: <AboutUs />,
          },
          {
            name: "pagination",
            route: "/sections/navigation/pagination",
            component: <AboutUs />,
          },
        ],
      },
      {
        name: "input areas",
        description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "inputs",
            route: "/sections/input-areas/inputs",
            component: <AboutUs />,
          },
          {
            name: "forms",
            route: "/sections/input-areas/forms",
            component: <AboutUs />,
          },
        ],
      },
    ],
  },
];
