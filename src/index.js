import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './vendor/normalize.css';
import reportWebVitals from './reportWebVitals';
import Loading from './components/Loading/Loading';
import { ThemeContext, ThemeProvider } from './Contexts/ThemeContext';
import { AppContextProvider } from "./Contexts/AppContextProvider";

const App = React.lazy(() => import('./App/App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Suspense>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
