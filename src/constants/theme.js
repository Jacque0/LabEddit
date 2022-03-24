import { createTheme } from '@material-ui/core/styles';
import { mainColors } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: mainColors.principal,
      contrastText: mainColors.fundo
    },
    secondary: {
      main: mainColors.secundario,
    }
  },
});