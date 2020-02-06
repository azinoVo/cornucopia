import axios from 'axios';

// uses axios to hit the backend server but only if there's a JWT

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      authorization: token
    }
  })
}

export default axiosWithAuth;