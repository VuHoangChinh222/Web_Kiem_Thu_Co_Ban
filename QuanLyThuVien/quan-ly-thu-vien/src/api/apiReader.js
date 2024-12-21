import axiosInstance from "./axios";

const apiReader = {
  getAll: () => {
    return axiosInstance.get("/doc-gias?populate=*").then((res) => res.data);
  },
  delReaderById: (id) => {
    return axiosInstance.delete(`/doc-gias/${id}`);
  },
  getDetailReaderById: (id)=>{
      return axiosInstance.get(`doc-gias?filters[id][$eq]=${id}&populate=*`).then((res) => res.data);
    },
};
export default apiReader;