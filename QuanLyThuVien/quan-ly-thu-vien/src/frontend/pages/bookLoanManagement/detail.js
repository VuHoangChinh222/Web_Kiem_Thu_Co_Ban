import { useEffect, useState } from "react";
import apiBook from "../../../api/apiBook";
import apiBookLoan from "../../../api/apiBookLoan";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { imageURL } from "../../../api/config";

function DetailBookLoanManagement() {
  const { id } = useParams();

  const [phieumuons, setPhieumuons] = useState([]);
  const [saches, setSaches] = useState([]);
  useEffect(() => {
    apiBookLoan.getDetailBookLoanById(id).then((res) => {
      try {
        const bookLData = res.data.map((bookL) => {
          return {
            id: bookL.id,
            docgia: bookL.doc_gia.name,
            date_entry: bookL.date_entry,
            date_out: bookL.date_out,
            nhanvien: bookL.nhan_vien.nhan_vien_name,
          };
        });
        setPhieumuons(bookLData);
        console.log("ListBook: ", bookLData);
      } catch (err) {
        console.log("Error: ", err);
      }
    });
  }, []);
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
  }, []);

  return (
    <div>
      <Link to="/QuanLyMuonTraSach">
        <i className="fas fa-arrow-left iconspacing"></i>
        <button className="btn-trove">Quay lại</button>
      </Link>
      <h3>
        <strong>Chi tiết phiếu mượn</strong>
      </h3>
      <hr />
      <div className="card">
        <table className="table">
          <thead className="table-title">
            <tr className="text-qlms">
              <th>Hình ảnh</th>
              <th>Mã sách</th>
              <th>Tên sách</th>
              <th>Tác giả</th>
              <th>Thể loại</th>
              <th>Số lượng mượn</th>
              <th>Giá sách</th>
            </tr>
          </thead>
          {saches.map((book) => (
            <tr className="text-center">
              <td>
                <img
                  src={imageURL + book.image}
                  alt={book.name}
                  style={{ height: "100px", width: "100px" }}
                />
              </td>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.tacgia}</td>
              <td>{book.theloai}</td>
              <td>{book.quantity}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default DetailBookLoanManagement;
