import { Song } from "@/lib/types";
import React from "react";
import SongItem from "../Song";

type Props = {
  songs: Song[];
};

function History({ songs }: Props) {
  if (!songs?.length)
    return <p className="text-muted-foreground">Lịch sử rỗng</p>;

  return (
    <div className="flex flex-col gap-8">
      {songs.map((song) => (
        <SongItem
          key={song._id}
          song={song}
          size="small"
          enablePlay={false}
        />
      ))}
    </div>
  );
}

export default History;
