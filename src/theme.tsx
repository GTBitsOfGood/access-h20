import { ThemeOptions } from '@material-ui/core/styles'
import { createMuiTheme }  from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#E9F2F9',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '32px'
    },
  },
})

export default theme