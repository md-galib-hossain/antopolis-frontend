import axios from "axios";
const axiosSecure = axios.create({
  // baseURL: `${process.env.NEXT_PUBLIC_BACKEND_LIVE_URL}/api/v1`,
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL}/api/v1`,
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
