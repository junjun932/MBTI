//인증인가

import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';
//등록
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
//로그인 
export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};
//userprofile가져오기
export const getUserProfile = async (token) => {
const response= await axios.get(`${(API_URL)}/user`,{
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
return response.data;
};
//프로필업데이트,이미지변경 닉네임변경
export const updateProfile = async (formData) => {
    const token =localStorage.getItem("accessToken");
const response= await axios.patch(`${(API_URL)}/profile`, formData 
    {
        headers: {
            "Content-Type": "multipart/form-data" ,
            "Authorization": `Bearer ${token}`
        }
})
return response.data;
};