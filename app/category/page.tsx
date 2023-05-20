import BlogService from '@app/services';

import Container from '@components/Container';
import CategoryList from '@components/category/CategoryList';
import MessageBox from '@components/MessageBox';
import PostCardList from '@components/post/PostCardList';
import LineSeparator from '@components/LineSeparator';

export const metadata = {
  title: 'Category',
  description: 'Category',
};

const getCategoriesAndPosts = async () => {
  try {
    const categories = await BlogService.getCategories();
    const posts = await BlogService.getPosts();
    return {
      categories,
      posts,
      hasError: false,
    };
  } catch (e) {
    return {
      categories: [],
      posts: [],
      hasError: true,
    };
  }
};

const Category = async () => {
  const { categories, posts, hasError } = await getCategoriesAndPosts();

  return (
    <Container maxWidth="md">
      {hasError && <MessageBox message="Oops!! Server error is occurred." />}
      {!hasError &&
        (categories.length === 0 ? (
          <MessageBox message="There is no category." />
        ) : (
          <>
            <CategoryList categories={categories} />
            <LineSeparator />
            <PostCardList posts={posts} />
          </>
        ))}
    </Container>
  );
};

export default Category;
