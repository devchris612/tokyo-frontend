import axios from "axios";

export const getNewestSongs = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/songs/new`;
  const res = await axios.get(url);
  return res.data;
};
