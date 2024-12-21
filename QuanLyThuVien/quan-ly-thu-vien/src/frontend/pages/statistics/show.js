 import { Link } from "react-router-dom";
function ShowStatistics() {
  return (
    <div>
      <h3><strong>Báo cáo thống kê</strong></h3>
      <div className="status-bar">
                <div className="status-group">
                    <Link to="viewThongKeSachMuon"><button className="status-item active">Thống kê sách mượn</button></Link>
                    <Link to="viewThongKeDoanhThu"><button className="status-item active">Thống kê doanh thu/lợi nhuận cho thuê</button></Link>
                </div>
            </div>
            <hr/>
            <div className="card">
                <table className="table">
                    <thead className="table-title">
                        <tr className="text">
                            <th>Mã sách</th>
                            <th>Tên sách</th>
                            <th>Tên tác giả</th>
                            <th>Tên thể loại</th>
                            <th>Ngày nhập</th>
                            <th>Giá bán</th>
                            <th>Số lượng mượn</th>
                            <th>Số lần mượn</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>34</td>
                            <td>Sếp tôi</td>
                            <td>Nguyen Van A</td>
                            <td>loại 1</td>
                            <td>11/12/1212</td>
                            <td>80.000</td>
                            <td>12</td>
                            <td>4</td>
                            <td>
                                <Link to = "Sua">
                                <i className="fas fa-wrench iconspacing"></i> 
                                </Link>
                                <i className="fas fa-trash"></i> 
                            </td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Sếp tôi</td>
                            <td>Nguyen Van A</td>
                            <td>loại 1</td>
                            <td>11/12/1212</td>
                            <td>80.000</td>
                            <td>12</td>
                            <td>4</td>
                            <td>
                                <Link to = "Sua">
                                <i className="fas fa-wrench iconspacing"></i> 
                                </Link>
                                <i className="fas fa-trash"></i> 
                            </td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Sếp tôi</td>
                            <td>Nguyen Van A</td>
                            <td>loại 1</td>
                            <td>11/12/1212</td>
                            <td>80.000</td>
                            <td>12</td>
                            <td>4</td>
                            <td>
                                <Link to = "Sua">
                                <i className="fas fa-wrench iconspacing"></i> 
                                </Link>
                                <i className="fas fa-trash"></i> 
                            </td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Sếp tôi</td>
                            <td>Nguyen Van A</td>
                            <td>loại 1</td>
                            <td>11/12/1212</td>
                            <td>80.000</td>
                            <td>12</td>
                            <td>4</td>
                            <td>
                                <Link to = "Sua">
                                <i className="fas fa-wrench iconspacing"></i> 
                                </Link>
                                <i className="fas fa-trash"></i> 
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
  );
}

export default ShowStatistics;
