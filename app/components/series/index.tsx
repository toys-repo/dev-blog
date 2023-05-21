'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { AiFillFolderOpen, AiFillFolder } from 'react-icons/ai';
import { MdOutlineEditCalendar } from 'react-icons/md';

import { ISeries } from '@app/interfaces';
import Dates from '@app/utils/dates';

import Text from '@components/Text';
import PostMetadata from '@components/post/PostMetadata';

interface SeriesProps {
  seriesItem: ISeries;
}

const Series = ({ seriesItem }: SeriesProps) => {
  const [isOpened, setIsOpened] = useState(true);

  const handleToggleIsOpened = useCallback(() => {
    setIsOpened((current) => !current);
  }, []);

  return (
    <div className="w-full max-h-60 overflow-y-auto p-2 h-full flex flex-col gap-4 bg-neutral-100/70 rounded-md">
      <div
        className="w-fit h-10 flex items-center gap-1 hover:opacity-60 cursor-pointer transition"
        onClick={handleToggleIsOpened}
      >
        {isOpened ? (
          <AiFillFolderOpen size="18" className="shrink-0" />
        ) : (
          <AiFillFolder size="18" className="shrink-0" />
        )}
        <Text variant="h3" className="line-clamp-1 text-lg font-bold">
          {seriesItem.name}
        </Text>
      </div>
      {isOpened && (
        <div className="w-full flex flex-col gap-2">
          {seriesItem.postSummaries.map(({ title, createdAt }, idx) => (
            <div key={title} className="w-full flex items-center justify-between gap-4">
              <Link
                href={`/${title}`}
                className="line-clamp-1 text-sm text-neutral-600 hover:font-semibold hover:text-black transition"
              >
                {`${idx + 1}. ${title}`}
              </Link>
              <PostMetadata icon={MdOutlineEditCalendar} metadata={Dates.toRelativeTime(new Date(createdAt))} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Series;
