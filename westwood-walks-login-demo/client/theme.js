import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#52c7b8',
      //main: '#009688',
      main: '#0072bb',
      dark: '#00675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
      contrastText: '#000',
    },
      openTitle: '#0072bb',
      protectedTitle: '#fcaf23',
      //xopenTitle: teal['700'],
      //xprotectedTitle: orange['700'],
      type: 'light'
    }
  })

  export default theme  