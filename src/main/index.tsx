import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

const App = () => <pre>Start Component</pre>

root.render(<App />);