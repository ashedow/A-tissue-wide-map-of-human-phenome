import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'alfa';
import * as TODO_FILTERS from './store/filter';
import * as actions from './store/actions'

import App from './components/App';

import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/layout.css";
import "./styles/typography.css";
import "./styles/datavis.css";

// import * as serviceWorker from './serviceWorker';

const data = {
    tissuelist: [],
    filter: TODO_FILTERS.SHOW_ALL,
    ...actions
  }

ReactDOM.render(
    <Provider data={data}>
        <App/>
      </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
