import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      {/* partial:partials/_sidebar.html */}
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="typcn typcn-device-desktop menu-icon" />
            <span className="menu-title">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/addCat'>
            <span className="menu-title">Add Category</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/listCat'>
            <span className="menu-title">List Category</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/addSub'>
            <span className="menu-title">Add Subcategory</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/listSub'>
            <span className="menu-title">List Subcategory</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/addProd'>
            <span className="menu-title">Add product</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/listProd'>
            <span className="menu-title">List product</span>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default SideBar;