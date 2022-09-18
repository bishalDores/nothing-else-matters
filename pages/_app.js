import { Auth0Provider } from "@auth0/auth0-react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Auth0Provider
        domain="dev-iv5ekxip.us.auth0.com"
        clientId="RQHZ6DotOXYgEopxgchlCi9bz2yTTsxU"
        redirectUri={"http://localhost:3000/"}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </>
  );
}

export default MyApp;
