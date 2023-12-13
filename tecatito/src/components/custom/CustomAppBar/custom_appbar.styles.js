import { makeStyles } from '@material-ui/core';
const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#42623B',
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: '#42623B',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: drawerWidth,
      width: `100%`,
    },
  },

  menuButton: ({ position }) => ({
    display: 'flex',
    marginRight: position === 'left' ? theme.spacing(1) : 0,
    marginLeft: position === 'right' ? 'right' : 0,
    backgroundColor: theme.palette.primary.main,

    border: `0.0625rem solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      borderColor: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.light,
    },
  }),

  extendButtonHidden: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',

    padding: theme.spacing(0, 3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    cursor: 'pointer',
    width: theme.spacing(25),
    height: theme.spacing(9),
    borderRadius: 0,

    border: '1px solid red',
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(20),

      borderRadius: 0,

      //  border: '1px solid blue',
    },
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    border: `0.0625rem solid ${theme.palette.primary.contrastText}`,
  },
  itemLink: {
    padding: theme.spacing(0, 1),
    border: `0.0625rem solid ${theme.palette.primary.contrastText}`,
  },
}));
