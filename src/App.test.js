import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home/Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
