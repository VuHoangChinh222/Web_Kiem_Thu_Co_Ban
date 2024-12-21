import { Link } from "react-router-dom";
function ShowBookLoanManagement() {
  return (
    <div>
      <h3>
        <strong>Quản lý mượn trả sách</strong>
      </h3>
            <hr/>
            <div className="card">
                <table className="table">
                    <thead className="table-title">
                        <tr className="text-qlms">
                            <th>Số phiếu</th>
                            <th>Mã độc giả</th>
                            <th>Ngày mượn</th>
                            <th>Ngày hẹn trả</th>
                            <th>Ghi chú</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td>34</td>
                            <td>Nguyen Van A</td>
                            <td>11/12/1212</td>
                            <td>11/11/2212</td>
                            <td>Trống</td>
                            <td>Quá hạn trả</td>
                            <td>
                                <Link to = "chitiet">
                                    <i className="fas fa-info iconspacing"></i>
                                </Link>
                                <i class="fas fa-trash iconspacing"></i> 
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>34</td>
                            <td>Nguyen Van A</td>
                            <td>11/12/1212</td>
                            <td>11/11/2212</td>
                            <td>Trống</td>
                            <td>Quá hạn trả</td>
                            <td>
                                <Link to = "chitiet">
                                    <i className="fas fa-info iconspacing"></i>
                                </Link>
                                <i class="fas fa-trash iconspacing"></i> 
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>34</td>
                            <td>Nguyen Van A</td>
                            <td>11/12/1212</td>
                            <td>11/11/2212</td>
                            <td>Trống</td>
                            <td>Quá hạn trả</td>
                            <td>
                                <Link to = "chitiet">
                                    <i className="fas fa-info iconspacing"></i>
                                </Link>
                                <i class="fas fa-trash iconspacing"></i> 
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>34</td>
                            <td>Nguyen Van A</td>
                            <td>11/12/1212</td>
                            <td>11/11/2212</td>
                            <td>Trống</td>
                            <td>Quá hạn trả</td>
                            <td>
                                <Link to = "chitiet">
                                    <i className="fas fa-info iconspacing"></i>
                                </Link>
                                <i class="fas fa-trash iconspacing"></i> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
  );
}

export default ShowBookLoanManagement;
