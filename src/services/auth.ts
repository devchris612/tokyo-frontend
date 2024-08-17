import axios from "axios";

export const handleLogin = async (email: string, password: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
  const res = await axios.post(url, {
    email,
    password,
  });
  return res.data;
};
