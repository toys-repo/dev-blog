import { CategoryStats } from '@app/types';

import Category from '@components/category';

interface CategoryListProps {
  categoryStats: CategoryStats;
}

const CategoryList = ({ categoryStats }: CategoryListProps) => {
  return (
    <div className="w-full flex flex-wrap gap-2 xs:h-48 md:h-60 overflow-y-auto">
      {Object.keys(categoryStats).map((categoryName) => (
        <Category key={categoryName} name={categoryName} postCount={categoryStats[categoryName]} />
      ))}
    </div>
  );
};

export default CategoryList;
