import PostService from '@app/services';

import Container from '@components/Container';
import CategoryList from '@components/category/CategoryList';
import MessageBox from '@components/MessageBox';
import PostCardList from '@components/post/PostCardList';
import LineSeparator from '@components/LineSeparator';

export const metadata = {
  title: 'Category',
  description: 'Category',
};

export const getData = async () => {
  const categories = await PostService.getCategories();
  const posts = await PostService.getPosts();
  return {
    categories,
    posts,
  };
};

const Category = async () => {
  const { categories, posts } = await getData();

  return (
    <Container maxWidth="md">
      {categories.length === 0 ? (
        <MessageBox message="There is no category." />
      ) : (
        <>
          <CategoryList categories={categories} />
          <LineSeparator />
          <PostCardList posts={posts} />
        </>
      )}
    </Container>
  );
};

export default Category;
