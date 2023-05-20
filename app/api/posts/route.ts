import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

import { IPost } from '@app/interfaces';

const ROOT_DIR = path.join(process.cwd(), 'public');
export const POST_DIR = path.join(ROOT_DIR, 'posts');

export const GET = async () => {
  const mdFilePaths = findMdFilePaths(POST_DIR);
  const posts = mdFilePaths.reduce((posts, mdFilePath) => {
    const mdFile = fs.readFileSync(mdFilePath);
    const { data, content } = matter(mdFile);
    posts.push({
      title: data.title,
      category: data.category,
      createdAt: data.createdAt,
      content: content,
      thumbnailPath: path.join(path.dirname(mdFilePath).replace(ROOT_DIR, ''), data.thumbnailPath),
      readingTime: data.readingTime,
      series: data.series,
    });
    return posts;
  }, [] as IPost[]);
  return NextResponse.json({ posts }, { status: 200 });
};

export const findMdFilePaths = (dir: string) => {
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
