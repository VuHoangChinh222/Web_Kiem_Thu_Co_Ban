import { useEffect, useState } from "react";
import apiBook from "../../../api/apiBook";
import { Link } from "react-router-dom";
import { imageURL } from "../../../api/config";

function ShowBookManagement() {
  const [saches, setSaches] = useState([]);
  const [delBookItem, setDelBookItem] = useState(0);

  useEffect(() => {
    apiBook.getAll().then((res) => {
      console.log("test: ", res.name);
      try {
        const bookData = res.data.map((book) => {
          return {
            id: book.id,
            name: book.sach_name,
            price: book.price,
            image: book.image.url,
            tacgia: book.tac_gia,
            quantity: book.quantity,
            dateentry: book.date_entry,
            theloai: book.the_loai,
          };
        });
        setSaches(bookData);
        console.log("ListBook: ", bookData);
      } catch (err) {
        console.log("Error: ", err);
      }
    });
  }, [delBookItem]);

  const delBook = (id) => {
    apiBook.delBookById(id).then((res) => {
      try {
        console.log(res);
        alert("Xóa sách thành công");
        setDelBookItem(id);
      } catch (e) {
        console.log(e);
      }
    });
  };

  return (
    <>
      <div>
        <div className="col-12 text-right">
          <button className="taomoi" style={{ marginBottom: "30px" }}>
            <Link className="btn btn-primary" to="/QuanLyKhoSach/Them">
              Thêm Sản Phẩm
            </Link>
          </button>
        </div>
        <h1>Quản Lý Kho Sách</h1>
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
        <div className="card">
          <table className="table table-striped table-bordered">
            <thead className="table-title">
              <tr className="text">
                <th>ID</th>
                <th>Hình ảnh</th>
                <th>Tên sách</th>
                <th>Tác giả</th>
                <th>Thể loại</th>
                <th>Số lượng</th>
                <th>Giá sách</th>
                <th>Ngày nhập</th>
                <th>Hành động</th>
              </tr>
            </thead>
            {saches.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  <img
                    src={imageURL + book.image}
                    alt={book.name}
                    style={{ height: "100px", width: "100px" }}
                  />
                </td>
                <td>{book.name}</td>
                <td>{book.tacgia}</td>
                <td>{book.theloai}</td>
                <td>{book.quantity}</td>
                <td>{book.price}</td>
                <td>{book.dateentry}</td>
                <td>
                  <Link to={`/QuanLyKhoSach/Sua/${book.id}`}>
                    {" "}
                    <i class="fas fa-wrench iconspacing"></i>{" "}
                  </Link>
                  <Link onClick={(e) => delBook(book.id)}>
                    <i class="fas fa-trash iconspacing"></i>{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
        {/* <ul class="pagination">
          <li class="page-item">
            <Link class="page-link" to={`/QuanLyKhoSach/${page - 1}`}>
              Previous
            </Link>
          </li>
          {Array.from(Array(pages).keys()).map((index) => (
            <li
              key={index}
              className={`page-item ${index + 1 === page ? "active" : ""}`}
            >
              <Link className="page-link" to={`/QuanLyKhoSach/${index + 1}`}>
                {index + 1}
              </Link>
            </li>
          ))}
          <li class="page-item">
            <Link class="page-link" to={`/admin/Books/${page + 1}`}>
              Next
            </Link>
          </li>
        </ul> */}
      </div>
    </>
  );
}
export default ShowBookManagement;
