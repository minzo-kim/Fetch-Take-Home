import react from "react";
import { createRoot } from 'react-dom/client'
import App from './App'


const root = createRoot(document.getElementById('root'));
root.render(<App />);

// react router is deprecated in react 18, so what do?
// create root is the new way over react router. more research into this.

