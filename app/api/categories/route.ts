import fs from 'fs';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

import { ICategory } from '@app/interfaces';
import { CategoryStats } from '@app/types';

import { POST_DIR, findMdFilePaths } from '@app/api/posts/route';

export const GET = async () => {
  const mdFilePaths = findMdFilePaths(POST_DIR);
  const categoryStats = mdFilePaths.reduce((categoryStats, mdFilePath) => {
    const mdFile = fs.readFileSync(mdFilePath);
    const {
      data: { category },
    } = matter(mdFile);
    categoryStats[category] = categoryStats[category] ? categoryStats[category] + 1 : 1;
    return categoryStats;
  }, {} as CategoryStats);
  const categories = Object.entries(categoryStats).reduce((categories, [name, postCount]) => {
    categories.push({ name, postCount });
    return categories;
  }, [] as ICategory[]);
  return NextResponse.json({ categories }, { status: 200 });
};
