'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineEditCalendar, MdOutlineTimer } from 'react-icons/md';

import { IPost } from '@app/interfaces';
import Dates from '@app/utils/dates';
import Markdowns from '@app/utils/markdowns';

import Text from '@components/Text';
import Category from '@components/category';
import PostMetadata from '@/app/components/post/PostMetadata';

interface PostCardProps {
  post: IPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const { title, content, category, thumbnailPath, createdAt, readingTime } = post;
  const relativeTime = Dates.toRelativeTime(new Date(createdAt));
  const postHref = `/${title}`;

  return (
    <div className="w-full h-56 border-b">
      <div className="w-full h-48 flex gap-6">
        <Link href={postHref} className="xs:hidden md:block w-48 h-full shrink-0">
          <Image src={thumbnailPath} alt={title} width={100} height={100} className="w-full h-full object-cover" />
        </Link>
        <div className="grow flex flex-col justify-around">
          <Link href={postHref} className="text-xl font-bold break-all line-clamp-2">
            {title}
          </Link>
          <Text variant="p" className="break-all line-clamp-4">
            {Markdowns.toPlainText(content)}
          </Text>
          <div className="flex w-full h-fit items-center gap-2">
            <PostMetadata icon={MdOutlineEditCalendar} metadata={relativeTime} />
            <PostMetadata icon={MdOutlineTimer} metadata={readingTime} />
            <Category name={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
