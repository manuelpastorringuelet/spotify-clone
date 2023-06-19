"use client";

import SongItem from "@/components/SongItem";
import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="text-neutral-400  mt-4">No songs available</div>;
  }
  return (
    <div
      className="
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    2xl:grid-cols-8
    gap-4
    mt-4
    "
    >
      {songs.map((item) => (
        <SongItem key={item.id} onClick={() => {}} data={item} />
      ))}
    </div>
  );
};

export default PageContent;
