/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import App from 'next/app';

import { StateProvider } from '../helpers/Context';

function MyApp({ Component, pageProps }) {
  const initialState = {
    Light: true,
    showNavMobile: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'On':
        return { ...state, Light: action.payload };
      case 'ShowNavMobile':
        return { ...state, ShowNavMobile: action.payload };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
