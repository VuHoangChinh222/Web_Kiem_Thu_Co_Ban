import axiosInstance from "./axios";

const apiBook = {
  getAll: () => {
    return axiosInstance.get("/saches?populate=*").then((res) => res.data);
  },
  getAll_TG: () => {
    return axiosInstance.get("/tac-gias").then((res) => res.data);
  },
  createBook: (data) => {
    return axiosInstance.post("/saches", data);
  },
  updateBook: (id, data) => {
    return axiosInstance.put(`/saches/${id}`, data);
  },
  delBookById: (id) => {
    return axiosInstance.delete(`/saches/${id}`);
  },
  //chi tiết sản phẩm
  getDetailBookById: (id) => {
    return axiosInstance
      .get(`saches?filters[id][$eq]=${id}&populate=*`)
      .then((res) => res.data);
  },
  getBookById: (id) => {
    return axiosInstance.get(`saches/${id}`);
  },
  getBookPagination: (page, limit) => {
    return axiosInstance
      .get(
        `/saches?pagination[page]=${page}&pagination[pageSize]=${limit}&populate=*`
      )
      .then((res) => res.data);
  },
};
export default apiBook;
