import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ViewThongKeSachMuon() {
  const [fromMonth, setFromMonth] = useState("");
  const [toMonth, setToMonth] = useState("");
  const [year, setYear] = useState("");
  const [chartData, setChartData] = useState(null);

  const handleFilter = () => {
    // Kiểm tra nếu thiếu dữ liệu đầu vào
    if (!fromMonth || !toMonth || !year) {
      alert("Vui lòng chọn đầy đủ Từ tháng, Đến tháng, và Năm.");
      return;
    }

    // Kiểm tra nếu tháng bắt đầu lớn hơn tháng kết thúc
    if (parseInt(fromMonth) > parseInt(toMonth)) {
      alert("Tháng bắt đầu không được lớn hơn tháng kết thúc!");
      return;
    }

    // Tạo danh sách tháng từ `fromMonth` đến `toMonth`
    const start = parseInt(fromMonth);
    const end = parseInt(toMonth);
    const months = [];

    for (let i = start; i <= end; i++) {
      months.push(`Tháng ${i}`);
    }

    // Dữ liệu giả lập - Cập nhật dữ liệu tương ứng với tháng
    const data = {
      labels: months, // Danh sách tháng
      datasets: [
        {
          label: "Sách mượn",
          data: months.map(() => Math.floor(Math.random() * 500 + 100)), // Dữ liệu giả ngẫu nhiên
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    };

    setChartData(data); // Cập nhật dữ liệu cho biểu đồ
  };

  return (
    <div>
      <Link to="/BaoCaoThongKe">
        <i className="fas fa-arrow-left iconspacing"></i>
        <button className="btn-trove">Quay lại</button>
      </Link>
      <h3>
        <strong>Thống kê doanh thu</strong>
      </h3>
      <hr />
      <div className="row filter-container">
        <div className="col-3 form-group">
          <label htmlFor="from-month">Từ tháng:</label>
          <select
            id="from-month"
            value={fromMonth}
            onChange={(e) => setFromMonth(e.target.value)}
          >
            <option value="">Chọn tháng</option>
            {[...Array(12)].map((_, i) => (
              <option value={i + 1} key={i}>
                Tháng {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="col-3 form-group">
          <label htmlFor="to-month">Đến tháng:</label>
          <select
            id="to-month"
            value={toMonth}
            onChange={(e) => setToMonth(e.target.value)}
          >
            <option value="">Chọn tháng</option>
            {[...Array(12)].map((_, i) => (
              <option value={i + 1} key={i}>
                Tháng {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="col-3 form-group">
          <label htmlFor="from-year">Năm:</label>
          <select
            id="from-year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Chọn năm</option>
            {[...Array(31)].map((_, i) => (
              <option value={2000 + i} key={i}>
                {2000 + i}
              </option>
            ))}
          </select>
        </div>

        <div className="col-2">
          <button
            id="filter-button"
            onClick={handleFilter}
            className="mr-sm-2 mr-md-3"
          >
            Thống kê
          </button>
        </div>
      </div>

      <p className="p-text" id="filter-info">
        {fromMonth && toMonth && year
          ? `Thống kê doanh thu từ tháng ${fromMonth} đến tháng ${toMonth} năm ${year}`
          : "Vui lòng chọn tháng và năm để thống kê."}
      </p>
      {chartData && (
        <div>
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  //text: `Thống kê doanh thu từ tháng ${fromMonth} đến tháng ${toMonth}, năm ${year}`,
                },
              },
            }}
            data={chartData}
          />
        </div>
      )}
    </div>
  );
}

export default ViewThongKeSachMuon;
