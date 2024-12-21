import Home from "../frontend/pages/home/home";
import NotFound from "../frontend/pages/notFound/notFound";
import LapPhieu from "../frontend/pages/BorrowingVoucher/lapphieu";
import Login from "../frontend/pages/user/logIn";

//Reader
import ShowReaderManagement from "../frontend/pages/readerManagement/show";
import AddReaderManagement from "../frontend/pages/readerManagement/add";
import EditReaderManagement from "../frontend/pages/readerManagement/edit";

//Book
import ShowBookManagement from "../frontend/pages/bookManagement/show";
import EditBookManagement from "../frontend/pages/bookManagement/edit";
import AddBookManagement from "../frontend/pages/bookManagement/add";

//BookLoan
import ShowBookLoanManagement from "../frontend/pages/bookLoanManagement/show";
import EditBookLoanManagement from "../frontend/pages/bookLoanManagement/edit";
import AddBookLoanManagement from "../frontend/pages/bookLoanManagement/add";
import DetailBookLoanManagement from "../frontend/pages/bookLoanManagement/detail";

//System
import ShowSystemManagement from "../frontend/pages/systemManagement/show";
import AddSystemManagement from "../frontend/pages/systemManagement/add";
import EditSystemManagement from "../frontend/pages/systemManagement/edit";

//statistics
import ShowStatistics from "../frontend/pages/statistics/show";
import AddStatistics from "../frontend/pages/statistics/add";
import EditStatistics from "../frontend/pages/statistics/edit";
//viewstatistics
import viewThongKeSachMuon from "../frontend/pages/statistics/view/viewThongKeSachMuon";
import viewThongKeDoanhThu from "../frontend/pages/statistics/view/viewThongKeDoanhThu";

import Menu from "../frontend/partial/menu";
const FrontEndRoute = [
  { path: "/", component: Home },
  { path: "/*", component: NotFound },

  { path: "/Menu", component: Menu },
  { path: "/LapPhieu", component: LapPhieu },

  //user
  { path: "Login", component: Login },

  //Reader
  { path: "/QuanLyDocGia", component: ShowReaderManagement },
  { path: "/QuanLyDocGia/Them", component: AddReaderManagement },
  { path: "/QuanLyDocGia/Sua", component: EditReaderManagement },

  //Book
  { path: "/QuanLyKhoSach/", component: ShowBookManagement },
  { path: "/QuanLyKhoSach/Them", component: AddBookManagement },
  { path: "/QuanLyKhoSach/Sua", component: EditBookManagement },

  //BookLoan
  { path: "/QuanLyMuonTraSach/", component: ShowBookLoanManagement },
  { path: "/QuanLyMuonTraSach/Them", component: AddBookLoanManagement },
  { path: "/QuanLyMuonTraSach/Sua", component: EditBookLoanManagement },
  { path: "/QuanLyMuonTraSach/chitiet", component: DetailBookLoanManagement },

  //System
  { path: "/QuanLyHeThong", component: ShowSystemManagement },
  { path: "/QuanLyHeThong/Them", component: AddSystemManagement },
  { path: "/QuanLyHeThong/Sua", component: EditSystemManagement },

  //statistics
  { path: "/BaoCaoThongKe/", component: ShowStatistics },
  { path: "/BaoCaoThongKe/Them", component: AddStatistics },
  { path: "/BaoCaoThongKe/Sua", component: EditStatistics },

  //viewstatistics
  {
    path: "/BaoCaoThongKe/viewThongKeSachMuon/",
    component: viewThongKeSachMuon,
  },
  {
    path: "/BaoCaoThongKe/viewThongKeDoanhThu/",
    component: viewThongKeDoanhThu,
  },
];

export default FrontEndRoute;
