import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  container: {
    display: 'flex',
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    border: `1px solid ${theme.palette.divider}`,
  },
  items: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    backgroundColor: 'blue',

    border: `1px solid ${theme.palette.divider}`,
  },
  typography: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    border: `1px solid ${theme.palette.divider}`,
  },
  //diseño
  grid: {
    border: '1px dashed red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popover: {
    border: '1px solid blue',
    backgroundColor: 'rgba(10, 255, 255, 1',
    padding: theme.spacing(1),
  },
  popoverContent: {
    border: '1px solid blue',
    backgroundColor: 'green',
    padding: theme.spacing(1),
  },
}));

export default useStyles;
