import axiosInstance from "./axios";

const apiSystem = {
  getAll: () => {
    return axiosInstance.get("/tai-khoans?populate=*").then((res) => res.data);
  },
  delSystemById: (id) => {
    return axiosInstance.delete(`/tai-khoans/${id}`);
  },
  getDetailSystemById: (id)=>{
      return axiosInstance.get(`tai-khoans?filters[id][$eq]=${id}&populate=*`).then((res) => res.data);
    },
};
export default apiSystem;