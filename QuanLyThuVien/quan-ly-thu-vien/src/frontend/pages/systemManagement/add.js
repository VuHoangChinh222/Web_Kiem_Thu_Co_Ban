import { Link } from "react-router-dom";
import { useState } from "react";

function AddSystemManagement() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nhanvienname, setNhanVienName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userid, setUserId] = useState(0);
  const [vaitro, setVaiTro] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      id: userid,
      username: username,
      pass: password,
      vaitro: vaitro,
    };
    const nhanvienData = {
      nhanvienname: nhanvienname,
      gender: gender,
      birthday: birthday,
      phone: phone,
      email: email,
    };
    console.log("user Data", userData);
    console.log("nhanvien Data", nhanvienData);
  };

  return (
    <div>
      <h3>
        <strong>Tạo mới tài khoản</strong>
      </h3>
      <form className="styled-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="username">Tên tài khoản:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            id="username"
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label for="password">Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            required
          />
        </div>
        <div className="form-group">
          <label for="confirmPassword">Xác nhận mật khẩu:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>
        <div className="form-group">
          <label for="role">Chọn vai trò:</label>
          <select
            id="role"
            value={vaitro}
            onChange={(e) => setVaiTro(e.target.value)}
            name="role"
          >
            <option value="admin">Admin</option>
            <option value="librarian">Thủ thư</option>
            <option value="user">Độc giả</option>
          </select>
        </div>
        <div className="form-actions">
          <Link to="/QuanLyHeThong">
            <button type="button" className="btn-quaylai">
              Quay lại
            </button>
          </Link>
          <button type="submit" className="btn primary">
            Tạo Tài khoản
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddSystemManagement;
