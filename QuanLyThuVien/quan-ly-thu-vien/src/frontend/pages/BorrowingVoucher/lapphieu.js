import React, { useState } from "react";
import { Link } from "react-router-dom";

function LapPhieu() {
  const [cart, setCart] = useState([]); // State lưu trữ sách trong giỏ hàng
  const [readerInfo, setReaderInfo] = useState({
    name: "",
    mssv: "",
    phone: "",
    address: "",
  }); // State lưu thông tin người mượn

  const books = [
    {
      id: 1,
      image: "Ảnh 1",
      name: "Sách giáo khoa 1",
      author: "Nguyen Van A",
      category: "Sách giáo khoa",
      datestart:"1/1/2012",
      dateend:"3/1/2013",
      price: 80000,
      quantity: 8,
    },
    {
      id: 2,
      image: "Ảnh 2",
      name: "Sách giáo khoa 2",
      author: "Nguyen Van B",
      category: "Sách giáo khoa",
      datestart:"1/1/2012",
      dateend:"3/1/2013",
      price: 90000,
      quantity: 10,
    },
    {
      id: 3,
      image: "Ảnh 3",
      name: "Sách giáo khoa 3",
      author: "Nguyen Van C",
      category: "Sách giáo khoa",
      datestart:"1/1/2012",
      dateend:"3/1/2013",
      price: 85000,
      quantity: 5,
    },
  ];

  // Hàm thêm sách vào giỏ hàng
  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingBook = prevCart.find((item) => item.id === book.id);
      if (existingBook) {
        return prevCart.map((item) =>
          item.id === book.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...book, cartQuantity: 1 }];
      }
    });
  };

  // Hàm thay đổi số lượng sách trong giỏ hàng
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      // Xóa sách khỏi giỏ hàng nếu số lượng là 0
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, cartQuantity: quantity } : item
        )
      );
    }
  };

  // Hàm xử lý nhập thông tin người mượn
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReaderInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // Hàm xử lý khi nhấn nút "Lập phiếu"
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Vui lòng chọn ít nhất một sách để mượn.");
      return;
    }
    if (!readerInfo.name || !readerInfo.idCard || !readerInfo.phone || !readerInfo.address) {
      alert("Vui lòng điền đầy đủ thông tin người mượn.");
      return;
    }
    console.log("Thông tin người mượn:", readerInfo);
    console.log("Danh sách sách mượn:", cart);
    alert("Phiếu mượn đã được lập thành công!");
  };

  return (
    <div className="container">
      <h3>
        <strong>Lập phiếu mượn</strong>
      </h3>
      <div className="row">
        {/* Danh sách sách */}
        <div className="col-left">
          <div className="card">
            <table className="table">
              <thead className="table-title">
                <tr className="text">
                  <th>Hình ảnh</th>
                  <th>Tên sách</th>
                  <th>Tác giả</th>
                  <th>Thể loại</th>
                  <th>Ngày mượn</th>
                  <th>Ngày hẹn trả</th>
                  <th>Giá mượn/ngày</th>
                  <th>Số lượng</th>
                  <th>Thêm</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.image}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.datestart}</td>
                    <td>{book.dateend}</td>
                    <td>{book.price.toLocaleString()} VND</td>
                    <td>{book.quantity}</td>
                    <td>
                      <button
                        onClick={() => addToCart(book)}
                        className="btn-add">
                        Thêm
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <h4>Sách mượn</h4>
            <div className="cart">
              {cart.length === 0 ? (
                <p>Chưa có sách</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tên sách</th>
                      <th>Thể loại</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tùy chỉnh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.price.toLocaleString()} VND</td>
                        <td>
                        <input
                            type="number"
                            min="1"
                            value={item.cartQuantity}
                            className="quantity-input"
                            onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value, 10))
                            }
                        />
                        </td>
                        <td>
                          <button
                            onClick={() => updateQuantity(item.id, 0)}
                            className="btn-remove bg-danger">
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
        {/* Thông tin người mượn và giỏ hàng */}
        <div className="col-right">
          <h4>Thông tin người mượn</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Họ và tên</label>
              <input
                type="text"
                id="name"
                name="name"
                value={readerInfo.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mssv">Mã số độc giả</label>
              <input
                type="text"
                id="mssv"
                name="mssv"
                value={readerInfo.mssv}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={readerInfo.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Địa chỉ</label>
              <input
                type="text"
                id="address"
                name="address"
                value={readerInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-actions">
              <Link to="/QuanLyMuonTraSach">
                <button type="button" className="btn-quaylai">
                  Xem phiếu mượn
                </button>
              </Link>
              <button type="submit" className="btn primary">
                Lập phiếu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LapPhieu;
