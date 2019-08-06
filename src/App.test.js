import React from 'react';
import App from './App';
import {render} from './setupTest'; 

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);  
});
