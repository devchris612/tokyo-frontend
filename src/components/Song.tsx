"use client";
import { Song } from "@/lib/types";
import { Button } from "./ui/button";
import playSongAction from "@/app/actions/playAction";

const Song = ({
  song,
  size,
  enablePlay,
}: {
  song: Song;
  size: "small" | "large";
  enablePlay?: boolean;
}) => {
  const sizeClass = () => {
    if (size === "small") {
      return "w-28 h-28 shrink-0";
    }
    if (size === "large") {
      return "w-40 h-40 shrink-0";
    }
    return "w-20 h-20 shrink-0";
  };

  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className={`${sizeClass()} overflow-hidden rounded-md bg-primary`}>
          <img
            src={song.imageUrl}
            alt="thumb"
            className="h-full w-auto"
          />
        </div>
        <div>
          <p>{song.title}</p>
          <p className="text-muted-foreground mt-2">{song.description}</p>
          {enablePlay && (
            <Button
              onClick={(e) => {
                playSongAction(song._id);
              }}
              className="mt-4">
              Play
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Song;
