"use client";
import { Song } from "@/lib/types";
import SongItem from "./Song";
import playSongAction from "@/app/actions/playAction";

type Props = {
  songs: Song[];
  heading: string;
};

function SongsList({ songs, heading }: Props) {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-xl font-bold pb-4 border-b">{heading}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        {songs.map((song) => (
          <SongItem
            song={song}
            size="large"
            key={song._id}
            enablePlay={true}
          />
        ))}
      </div>
    </div>
  );
}

export default SongsList;
