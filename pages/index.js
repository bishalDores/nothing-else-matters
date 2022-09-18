import { useEffect, useState } from "react";
import { getRequest } from "../common/APIs";
import Layout from "../common/components/Layout";
import SingleItem from "../common/components/SingleItem";
import variables from "../common/variables";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "js-cookie";

export default function Home({ items }) {
  const router = useRouter();
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  const [authUser, setAuthUser] = useState({});
  useEffect(() => {
    if (isAuthenticated) {
      Cookies.set("auth-info", JSON.stringify(user), { expires: 1 });
      Cookies.set("web-auth", true, { expires: 1 });
    }
  }, [isAuthenticated]);
  useEffect(() => {
    const user = Cookies.get("auth-info");
    const webAuth = Cookies.get("web-auth");
    if (webAuth) {
      setAuthUser(JSON.parse(user));
    }
  }, [authUser]);

  console.log(authUser);
  return (
    <Layout>
      <div className="banner_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner_text">
                <p className="text_main">
                  Your <span>Favourite food</span>deliveried <span>hot</span>{" "}
                  and <span>fresh</span>
                </p>
                <p className="sub">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus, eu non viverra senectus donec. Platea massa sit tellus
                  ipsum, nulla viverra.
                </p>
                <div className="cta">
                  <button onClick={() => loginWithRedirect()}>Order Now</button>
                  <p className="previous">$30</p>
                  <p className="current">
                    <sub>$</sub>20
                  </p>
                  <a>
                    <img src="/images/watch-more.png" alt="demo" />
                    Watch More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item_showcase">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="item_showcase_wrapper">
                <div className="row">
                  {items.map((product, i) => {
                    return (
                      <div className="col-md-3" key={i}>
                        <SingleItem product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {authUser.name && (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="auth_wrapper">
                <img src={authUser.picture} />
                <p>You are logged in as: {authUser.name}</p>
                <p>Your email address: {authUser.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
export async function getServerSideProps(context) {
  let products;

  const res = await getRequest(variables.apiUrls.getProducts);
  if (res.status === 200) {
    products = res.data.products;
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      items: products,
    },
  };
}
