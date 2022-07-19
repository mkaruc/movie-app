import AppRouter from './router/AppRouter';
import theme from './components/globalStyles/theme';
import { ThemeProvider } from 'styled-components';
import AuthContextProvider from "./context/AuthContext";
function App() {
  return (
    <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;

