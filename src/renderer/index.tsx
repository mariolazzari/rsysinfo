import { createRoot } from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import store from 'renderer/redux/store';
// components
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
