import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import dialog_fr from "./translations/fr/dialog.json";
import modal_fr from "./translations/fr/modal.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'fr',                              // language to use
    resources: {
        fr: {
            dialog: dialog_fr,
            modal: modal_fr
        }
    },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App/>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
