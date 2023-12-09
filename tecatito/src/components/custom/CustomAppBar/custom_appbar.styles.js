import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      marginLeft: drawerWidth,
      width: `100%`,
    },
  },
  // appbar: ({ position }) => ({
  //   position: "fixed",
  //   [theme.breakpoints.up("md")]: {
  //     width: `calc(100% - ${position === "left" ? s : 0}px)`,
  //     marginLeft: position === "left" ? 240 : 0,
  //   },
  //   zIndex: theme.zIndex.drawer + 1,
  // }),
  // appBarShift: {
  //   position: "fixed",
  //   [theme.breakpoints.up("md")]: {
  //     zIndex: theme.zIndex.drawer + 2,
  //     transition: theme.transitions.create(["width", "margin"], {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.leavingScreen,
  //     }),
  //   },
  // },

  menuButton: ({ position }) => ({
    marginRight: position === "left" ? theme.spacing(1) : 0,
    marginLeft: position === "right" ? "right" : 0,
    backgroundColor: theme.palette.primary.main,

    border: `0.0625rem solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      borderColor: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.light,
    },
  }),
  extendButton: {
    marginRight: 25,
    backgroundColor: "yellow",
    width: 35,
    height: 35,
    color: "black",
    border: "1px solid red",
  },
  extendButtonHidden: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
