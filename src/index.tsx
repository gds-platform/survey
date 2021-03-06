import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './views/App';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'regenerator-runtime/runtime'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
