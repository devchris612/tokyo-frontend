import axios from "axios";
import { cookies } from "next/headers";

export const getUser = async () => {
  try {
    const cookieStore = cookies();
    const jwtToken = cookieStore.get("jwt")?.value;
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return res.data;
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const recommendedSongs = async (limit: number) => {
  try {
    const cookieStore = cookies();
    const jwtToken = cookieStore.get("jwt")?.value;
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/recommend?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    return res.data;
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const forgotPassword = async (email: string) => {
  const cookieStore = cookies();
  const jwtToken = cookieStore.get("jwt")?.value;
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users/forgot`,
    {
      email,
    },
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );
  return res.data;
};

export const resetPassword = async (
  email: string,
  oldPassword: string,
  newPassword: string,
  cfNewPassword: string
) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users/reset-password`,
    {
      email,
      old_password: oldPassword,
      new_password: newPassword,
      cf_new_password: cfNewPassword,
    }
  );
  return res.data;
};
