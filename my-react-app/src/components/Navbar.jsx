import { nav_list_ul} from "react-router-dom";

export default function Navbar() {
  return (
<nav>
      <div className="nav_icon">
       <img src="./src/assets/Combined Shape.png" alt="" />
        <h2>creative</h2>
      </div>
      <div className="nav_list">
        <ul className="nav_list_ul">
          <li className="nav_list_li">About</li>
          <li className="nav_list_li">Service</li>
          <li className="nav_list_li">Projects</li>

          <button className="nav_list_btn">Schedule a Call</button>
        </ul>
      </div>
    </nav>


  );
}