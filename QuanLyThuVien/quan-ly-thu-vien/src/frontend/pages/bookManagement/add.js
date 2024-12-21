import { useState } from "react";
import apiBook from "../../../api/apiBook";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios";

function AddBookManagement() {
  const [bookname, setBookName] = useState("");
  const [theloai, setTheLoai] = useState("");
  const [price, setPrice] = useState("");
  const [tacgia, setTacGia] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        alert("Chỉ chấp nhận các định dạng JPEG và PNG.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        // 2MB
        alert("Kích thước file không được vượt quá 2MB.");
        return;
      }
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = {
      sach_name: bookname, // chỗ này :))
      price: price,
      theloai: theloai,
      tacgia: tacgia,
      quantity: quantity,
      image: [],
    };

    let file = new FormData();
    file.append("files", image); //Đưa giá trị của hình vào file
    axiosInstance.enableUploadFile();
    axiosInstance
      .post("/upload", file)
      .then(async (res) => {
        const fileId = res.data[0].id;
        bookData.image.push(fileId);
        axiosInstance.enableJson();
        const responseProduct = await apiBook.createBook({
          data: bookData,
        });
        console.log(responseProduct);
        alert("Product created successfully");
        navigate("/admin/products/1");
      })
      .catch((error) => {
        console.error("Error creating book:", error);
        alert("Failed to create the book. Please try again.");
      });
  };

  return (
    <>
      <div>
        <h3>
          <strong>Thêm sách mới</strong>
        </h3>
        <form className="styled-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="bookName">Tên sách</label>
            <input
              type="text"
              value={bookname}
              onChange={(e) => setBookName(e.target.value)}
              id="bookName"
              name="bookName"
              required
            />
          </div>
          <div className="form-group">
            <label for="authorName">Tên tác giả</label>
            <input
              type="text"
              value={tacgia}
              onChange={(e) => setTacGia(e.target.value)}
              id="authorName"
              name="authorName"
              required
            />
          </div>
          <div className="form-group">
            <label for="theloai">Thể loại</label>
            <input
              type="text"
              value={theloai}
              onChange={(e) => setTheLoai(e.target.value)}
              id="theloai"
              name="theloai"
              required
            />
          </div>
          <div className="form-group">
            <label for="price">Đơn giá sách</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              name="price"
              required
            />
          </div>
          <div className="form-group">
            <label for="quantity">Số lượng sách</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              id="quantity"
              name="quantity"
              required
            />
          </div>
          <div className="form-group">
            <label for="image">Image:</label>
            <input
              type="file"
              className="form-control"
              name="image"
              id="image"
              required
              onChange={handleFileChange}
            />
          </div>
          <div className="form-actions">
            <Link to="/QuanLyKhoSach">
              <button type="button" className="btn-quaylai">
                Quay lại
              </button>
            </Link>
            <button type="submit" className="btn primary">
              Thêm sách
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddBookManagement;
