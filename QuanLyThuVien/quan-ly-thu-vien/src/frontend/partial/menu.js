import "../assets/bootstrap/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="Home" className="nav-link">
        <p className="brand" data-widget="treeview">
          QUAN LY THU VIEN
        </p>
      </Link>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-home"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/QuanLyHeThong" className="nav-link">
                <i className="nav-icon fas fa-database"></i>
                <p>Quản lý hệ thống</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/QuanLyKhoSach" className="nav-link">
                <i className="nav-icon fas fa-book"></i>
                <p>Quản lý kho sách</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/QuanLyDocGia" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>Quản lý độc giả</p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/QuanLyMuonTraSach" className="nav-link">
                <i className="nav-icon fas fa-file"></i>
                <p>Quản lý mượn trả sách</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/BaoCaoThongKe" className="nav-link">
                <i className="nav-icon fas fa-chart-bar"></i>
                <p>Báo cáo thống kê</p>
              </a>
            </li>
            <li className="nav-item">
              <Link to= "/LogOut" className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Thoát</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Menu;
