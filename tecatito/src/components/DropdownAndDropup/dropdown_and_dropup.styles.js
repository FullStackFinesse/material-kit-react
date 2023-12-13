import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  dropUnIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
  typography: {
    fontWeight: 'bold',
    textTransform: 'none',
    color: 'white',
    border: '2px solid #000',
  },
  iconButton: {
    marginLeft: theme.spacing(1),
    fontWeight: 'bold',
    transition: 'transform 200ms ease-in-out',
  },
  rotatedIcon: {
    transform: 'rotate(180deg)',
  },
  menuPaper: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    border: '2px solid #000',

    padding: theme.spacing(0.5),
  },
}));
