import { Link } from "react-router-dom";
function AddBookManagement() {
  return (
    <div>
      <h3><strong>Thêm sách mới</strong></h3>
            <form className="styled-form">
                <div className="form-group">
                    <label for="entryDate">Ngày nhập sách</label>
                    <input type="date" id="entryDate" name="entryDate" required/>
                </div>
                <div className="form-group">
                    <label for="bookName">Tên sách</label>
                    <input type="text" id="bookName" name="bookName" required/>
                </div>
                <div className="form-group">
                    <label for="authorName">Tên tác giả</label>
                    <input type="text" id="authorName" name="authorName" required/>
                </div>
                <div className="form-group">
                    <label for="category">Thể loại</label>
                    <input type="text" id="category" name="category" required/>
                </div>
                <div className="form-group">
                    <label for="price">Đơn giá sách</label>
                    <input type="number" id="price" name="price" required/>
                </div>
                <div className="form-group">
                    <label for="rentalPrice">Giá thuê ngày</label>
                    <input type="number" id="rentalPrice" name="rentalPrice" required/>
                </div>
                <div className="form-group">
                    <label for="quantity">Số lượng sách</label>
                    <input type="number" id="quantity" name="quantity" required/>
                </div>
                <div className="form-group">
                    <label for="imagePath">Đường dẫn ảnh</label>
                    <input type="text" id="imagePath" name="imagePath" required/>
                </div>
                <div className="form-actions">
                    <Link to ="/QuanLyKhoSach">
                        <button type="button" className="btn-quaylai">Quay lại</button>
                    </Link>
                    <button type="submit" className="btn primary">Thêm sách</button>
                </div>
            </form>
    </div>
  );
}
export default AddBookManagement;

