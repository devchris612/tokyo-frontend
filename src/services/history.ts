import axios from "axios";
import { cookies } from "next/headers";

export const createHistory = async (songId: string) => {
  try {
    const jwt = cookies().get("jwt")?.value;
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/history`,
      {
        songId,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return res.data;
  } catch (error: any) {
    return {
      error: error.response.data,
    };
  }
};

export const getHistory = async () => {
  try {
    const jwt = cookies().get("jwt")?.value;
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/history`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return res.data;
  } catch (error: any) {
    return {
      error: error.response.data,
    };
  }
};

export const removeHistory = async (userId: string) => {
  try {
    const jwt = cookies().get("jwt")?.value;
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/users/history/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return res.data;
  } catch (error: any) {
    return {
      error: error.response.data,
    };
  }
};
