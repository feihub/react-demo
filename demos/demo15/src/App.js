import { Link, NavLink } from "react-router-dom";
export default function APP() {
  return (
    <div className="container">
      <div className="row">
        <div className="span8">
          <ul className="nav nav-tabs">
            <li>
              <NavLink
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link to="/friend">Friend</Link>
            </li>
            <li>
              <Link to="/my">My</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
