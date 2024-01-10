import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar  mx-auto md:pl-10">
      {/* Sidebar */}
      <Sidebar/>
      
    </div>
  );
};

export default Navbar;
