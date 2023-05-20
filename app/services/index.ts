import { IPostsRes, ICategoryRes } from '@app/interfaces';

class PostService {
  static getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/api/posts`, { cache: 'force-cache' });
    const { posts } = (await res.json()) as IPostsRes;
    return posts;
  };

  static getCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/api/categories`, { cache: 'force-cache' });
    const { categories } = (await res.json()) as ICategoryRes;
    return categories;
  };
}

export default PostService;
