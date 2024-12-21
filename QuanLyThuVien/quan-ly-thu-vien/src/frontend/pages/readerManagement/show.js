import { useEffect, useState } from "react";
import apiReader from "../../../api/apiReader";
import { Link } from "react-router-dom";
import { imageURL } from "../../../api/config";

function ShowReaderManagement() {
  const [reader, setReader] = useState([]);
  const [delReaderItem, setDelReaderItem] = useState(0);
  useEffect(() => {
    apiReader.getAll().then((res) => {
      // console.log("test Reader: ",res.name)
      try {
        const readerData = res.data.map((reader) => {
          return {
            id: reader.id,
            name: reader.name,
            birthday: reader.birthday,
            // image: reader.image.url,
            gender: reader.gender,
            address: reader.address,
            phone: reader.phone,
            email: reader.email,
            mssv: reader.mssv,
          };
        });
        setReader(readerData);
        console.log("ListReader: ", readerData);
      } catch (err) {
        console.log("Error: ", err);
      }
    });
  }, [delReaderItem]);

  const delReader = (id) => {
    apiReader.delReaderById(id).then((res) => {
      try {
        console.log(res);
        alert("Xóa sách thành công");
        setDelReaderItem(id);
      } catch (e) {
        console.log(e);
      }
    });
  };

  return (
    <div>
      <div className="col-12 text-right"></div>
      <h3>
        <strong>Quản lý độc giả</strong>
      </h3>
      <div className="row">
        <div className="col-md-6">
          <Link to="/QuanLyDocGia/Them">
            <button className="taomoi"> Them Doc Gia</button>
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
        <table className="table table-striped table-bordered">
          <thead className="table-title">
            <tr className="text">
              <th>Mã độc giả</th>
              <th>Mã sinh viên</th>
              <th>Tên độc giả</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Hành động</th>
            </tr>
          </thead>
          {reader.map((reader) => (
            <tr key={reader.id}>
              <td>{reader.id}</td>
              <td>{reader.mssv}</td>
              <td>{reader.name}</td>
              <td>{reader.gender}</td>
              <td>{reader.birthday}</td>
              <td>{reader.address}</td>
              <td>{reader.phone}</td>
              <td>{reader.email}</td>
              <td>
                <Link to={`Sua/${reader.id}`}>
                  {" "}
                  <i class="fas fa-wrench iconspacing"></i>{" "}
                </Link>
                <Link onClick={(e) => delReader(reader.id)}>
                  <i class="fas fa-trash iconspacing"></i>{" "}
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default ShowReaderManagement;
