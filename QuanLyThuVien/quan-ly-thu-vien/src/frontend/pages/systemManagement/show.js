import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiSystem from "../../../api/apiSystem";

function ShowSystemManagement() {
  const [system, setSystem] = useState([]);
  const [delSystemItem, setDelSystemItem] = useState(0);
  useEffect(() => {
    apiSystem.getAll().then((res) => {
      // console.log("test: ",res.data.user_name)
      try {
        const systemData = res.data.map((system) => {
          return {
            id: system.id,
            username: system.user_name,
            vaitro: system.vai_tro.vai_tro_name,
            nhanvien: system.nhan_vien.nhan_vien_name,
            email: system.nhan_vien.email,
          };
        });
        setSystem(systemData);
        console.log("ListSystem: ", systemData);
      } catch (err) {
        console.log("Error: ", err);
      }
    });
  }, [delSystemItem]);

  const delSystem = (id) => {
    apiSystem.delSystemById(id).then((res) => {
      try {
        console.log(res);
        alert("Xóa tai khoan thành công");
        setDelSystemItem(id);
      } catch (e) {
        console.log(e);
      }
    });
  };

  return (
    <div>
      <h3>
        <strong>Danh sách tài khoản trong hệ thống</strong>
      </h3>
      <div className="row">
        <div className="col-md-6">
          <Link to="/QuanLyHeThong/Them">
            <button className="taomoi"> Them Tai Khoan</button>
          </Link>
        </div>
        <div className="col-md-6">
          <div className="col-12">
            <div
              className="search-dg text-right"
              style={{ marginBottom: "20px" }}
            >
              <input
                type="text"
                className="search-txt-dg"
                id="searchInput"
                placeholder="Tìm kiếm theo tên, email,...."
              />
              <button className="search-btn-dg">
                <p className="btn-sr">Search</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead className="table-title">
            <tr className="text">
              <th>Id</th>
              <th>Tên đăng nhập</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Nhan vien</th>
              <th>Hanh dong</th>
            </tr>
          </thead>
          <tbody>
            {system.map((system) => (
              <tr key={system.id}>
                <td>{system.id}</td>
                <td>{system.username}</td>
                <td>{system.email}</td>
                <td>{system.vaitro}</td>
                <td>{system.nhanvien}</td>
                <td>
                  <Link to={`Sua/${system.id}`}>
                    <i className="fas fa-wrench iconspacing"></i>
                  </Link>
                  <Link onClick={(e) => delSystem(system.id)}>
                    <i className="fas fa-trash "></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ShowSystemManagement;
