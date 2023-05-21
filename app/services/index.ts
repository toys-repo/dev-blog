import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { IPost, ICategory, ISeries } from '@app/interfaces';
import { CategoryStats, SeriesStats } from '@app/types';

class BlogService {
  private static ROOT_DIR = path.join(process.cwd(), 'public');
  private static POST_DIR = path.join(this.ROOT_DIR, 'posts');

  static getPosts = async () => {
    const mdFilePaths = this.findMdFilePaths(this.POST_DIR);
    return mdFilePaths.reduce((posts, mdFilePath) => {
      const mdFile = fs.readFileSync(mdFilePath);
      const { data, content } = matter(mdFile);
      posts.push({
        title: data.title,
        category: data.category,
        createdAt: data.createdAt,
        content: content,
        thumbnailPath: path.join(path.dirname(mdFilePath).replace(this.ROOT_DIR, ''), data.thumbnailPath),
        readingTime: data.readingTime,
        series: data.series,
      });
      return posts;
    }, [] as IPost[]);
  };

  static getCategories = async () => {
    const mdFilePaths = this.findMdFilePaths(this.POST_DIR);
    const categoryStats = mdFilePaths.reduce((categoryStats, mdFilePath) => {
      const mdFile = fs.readFileSync(mdFilePath);
      const {
        data: { category },
      } = matter(mdFile);
      categoryStats[category] = categoryStats[category] ? categoryStats[category] + 1 : 1;
      return categoryStats;
    }, {} as CategoryStats);
    return Object.entries(categoryStats).reduce((categories, [name, postCount]) => {
      categories.push({ name, postCount });
      return categories;
    }, [] as ICategory[]);
  };

  static getSeries = async () => {
    const mdFilePaths = this.findMdFilePaths(this.POST_DIR);
    const seriesStats = mdFilePaths.reduce((seriesStats, mdFilePath) => {
      const mdFile = fs.readFileSync(mdFilePath);
      const {
        data: { title, series, createdAt },
      } = matter(mdFile);
      if (series) {
        seriesStats[series] = seriesStats[series]
          ? seriesStats[series].concat({ title, createdAt })
          : [{ title, createdAt }];
      }
      return seriesStats;
    }, {} as SeriesStats);
    return Object.entries(seriesStats).reduce((series, [name, posts]) => {
      const sortedPostSummaries = posts.sort(
        (postA, postB) => new Date(postA.createdAt).getTime() - new Date(postB.createdAt).getTime()
      );
      return series.concat({ name, postSummaries: sortedPostSummaries });
    }, [] as ISeries[]);
  };

  private static findMdFilePaths = (dir: string) => {
    const mdFilePaths = [] as string[];

    const walkDirectory = (dir: string) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          walkDirectory(filePath);
        }
        if (path.extname(filePath).toLowerCase() === '.md') {
          mdFilePaths.push(filePath);
        }
      }
    };

    walkDirectory(dir);
    return mdFilePaths;
  };
}

export default BlogService;
