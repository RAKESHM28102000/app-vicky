import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import { ThemeProvider} from '@mui/material/styles';
import theme from "./component/theme";

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)
// ReactDOM.render(<div><ThemeProvider theme={theme}><App/> </ThemeProvider></div>,document.getElementById('root'));