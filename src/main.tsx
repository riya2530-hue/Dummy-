import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
  <App />
  <Toaster
    position="top-right"
    toastOptions={{
      duration: 2000,
      style: {
        background: "#ffffff",
        color: "#333",
        border: "1px solid #f43f5e",
      },
    }}
  />
</>
  </StrictMode>,
);
