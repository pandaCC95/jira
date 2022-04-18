import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { loadDevTools } from "jira-dev-tool";
import { AppProviders } from 'Context';

loadDevTools(()=> {
  const container = document.querySelector('#root')!; //! null check in TS
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>
  );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
