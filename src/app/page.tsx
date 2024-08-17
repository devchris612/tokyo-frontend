import Banner from "@/components/Banner";
import SongsList from "@/components/SongsList";
import { getNewestSongs } from "@/services/songs";
import { recommendedSongs } from "@/services/users";

export default async function Home() {
  const newestSongs = await getNewestSongs();
  const recommendations = await recommendedSongs(8);

  const topSongs = recommendations || newestSongs;

  return (
    <div className="">
      <Banner songs={topSongs?.slice(0, 3)} />
      <SongsList
        heading="Newest Songs"
        songs={newestSongs}
      />
      <SongsList
        heading="Top Songs"
        songs={topSongs || newestSongs}
      />
    </div>
  );
}
