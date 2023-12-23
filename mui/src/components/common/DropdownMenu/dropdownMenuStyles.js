import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  content: {
    border: '1px dashed orange',
  },

  icon: {
    // color: 'red',
    // color: 'white',
    border: '1px dashed red',
    marginTop: '-1.5rem',
    // backgroundColor: 'rgba(0,0,0,0.2)',
    // marginLeft: '1rem',
  },
  square: {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
  },
  circle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'red',
  },
  triangle: {
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '15px solid white',
    marginTop: '-0.8rem',
    position: 'relative',
  },
  contentRoutes: {
    border: '1px dashed red',

    // boxShadow: ' 0px 0px 10px rgba(0,0,0,0.2)',
  },
}))
