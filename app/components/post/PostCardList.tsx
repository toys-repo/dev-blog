import { IPost } from '@app/interfaces';

import PostCard from '@components/post/PostCard';

interface PostCardListProps {
  posts: IPost[];
}

const PostCardList = ({ posts }: PostCardListProps) => {
  return (
    <div className="w-full flex flex-col justify-center gap-6">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
};

export default PostCardList;
