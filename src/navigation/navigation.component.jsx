import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assests/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrwnLogo />
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signIn">
            Sign-in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
