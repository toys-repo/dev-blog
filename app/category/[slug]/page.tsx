import { IParams } from '@app/interfaces';
import BlogService from '@app/services';

import Container from '@components/Container';
import MessageBox from '@components/MessageBox';
import LineSeparator from '@components/LineSeparator';
import CategoryList from '@components/category/CategoryList';
import PostCardList from '@components/post/PostCardList';

const getPostsByCategoryName = async (slug: string | undefined) => {
  const posts = await BlogService.getPosts();
  return slug ? posts.filter((post) => post.category.trim() === decodeURIComponent(slug)) : posts;
};

const CategoryPage = async ({ params: { slug } }: { params: IParams }) => {
  const categories = await BlogService.getCategories();
  const retrievedPosts = await getPostsByCategoryName(slug);

  return (
    <Container>
      {categories.length === 0 ? (
        <MessageBox message="There is no category." />
      ) : (
        <>
          <CategoryList categories={categories} />
          <LineSeparator />
          <PostCardList posts={retrievedPosts} />
        </>
      )}
    </Container>
  );
};

export default CategoryPage;
