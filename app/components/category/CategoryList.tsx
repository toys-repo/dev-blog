import { ICategory } from '@app/interfaces';

import Category from '@components/category';

interface CategoryListProps {
  categories: ICategory[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className="w-full flex flex-wrap gap-2 xs:h-48 md:h-60 overflow-y-auto">
      {categories.map((category) => (
        <Category key={category.name} name={category.name} postCount={category.postCount} />
      ))}
    </div>
  );
};

export default CategoryList;
