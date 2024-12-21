
import axiosInstance from "./axios";

const apiBookLoan ={
    getAll: ()=>{
        return axiosInstance.get("/phieu-muons?populate=*").then((res)=> res.data);
    },
    createBookLoan:(data)=>{
        return axiosInstance.post("/phieu-muons",data);
      },
      updateBookLoan:(id,data)=>{
        return axiosInstance.put(`/phieu-muons/${id}`,data);
      },
      delBookLoanById:(id)=>{
        return axiosInstance.delete(`/phieu-muons/${id}`);
      },
      getDetailBookLoanById: (id)=>{
            return axiosInstance.get(`phieu-muons?filters[id][$eq]=${id}&populate=*`).then((res) => res.data);
          },
}
export default apiBookLoan;