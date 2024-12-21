import { useEffect, useState } from "react";
import apiBook from "../../../api/apiBook";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditBookManagement() {
  const { id } = useParams();

  const [bookname, setBookName] = useState("");
  const [theloai, setTheLoai] = useState("");
  const [price, setPrice] = useState("");
  const [tacgia, setTacGia] = useState("");
  const [date_entry, setDateEntry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [bookid, setBookId] = useState(0);
  //   const [imageId,setImageId] = useState(0);
  //   const [image, setImage] =useState(null);
  //   const navigate=useNavigate();

  useEffect(() => {
    apiBook.getDetailBookById(id).then((res) => {
      try {
        console.log("Book Detail: ", res);
        setBookId(res.data[0].id);
        setBookName(res.data[0].sach_name);
        setPrice(res.data[0].price);
        setTacGia(res.data[0].tac_gia);
        setTheLoai(res.data[0].the_loai);
        setDateEntry(res.data[0].date_entry);
        setQuantity(res.data[0].quantity);
        // setImage(res.data[0].image.url);
        //   setImageId(res.data[0].image.id);
      } catch (e) {
        console.log(e);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = {
      id: bookid,
      book_name: bookname,
      price: price,
      theloai: theloai,
      tacgia: tacgia,
      date_entry: date_entry,
      quantity: quantity,
      //   image:[imageId],
    };
    console.log("book Data", bookData);
  };

  return (
    <>
      <div>
        <h3>
          <strong>Sửa sách</strong>
        </h3>
        <form className="styled-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="entryDate">Ngày nhập sách</label>
            <input
              type="date"
              value={date_entry}
              onChange={(e) => setDateEntry(e.target.value)}
              id="entryDate"
              name="entryDate"
              required
            />
          </div>
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
            <label for="category">Thể loại</label>
            <input
              type="text"
              value={theloai}
              onChange={(e) => setTheLoai(e.target.value)}
              id="category"
              name="category"
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
            <label for="imagePath">Đường dẫn ảnh</label>
            <input type="text" id="imagePath" name="imagePath" required />
          </div>
          <div className="form-actions">
            <Link to="/QuanLyKhoSach">
              <button type="button" className="btn-quaylai">
                Quay lại
              </button>
            </Link>
            <button type="submit" className="btn primary">
              Lưu chỉnh sửa
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EditBookManagement;
