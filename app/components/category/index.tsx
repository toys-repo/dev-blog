import Link from 'next/link';

interface CategoryProps {
  name: string;
  postCount?: number;
}

const Category = ({ name, postCount }: CategoryProps) => {
  return (
    <Link
      href={`/category/${name}`}
      className="px-3 w-fit h-fit text-center cursor-pointer border rounded-xl text-sm bg-neutral-200 text-neutral-600 hover:brightness-110 transition"
    >
      {!postCount ? `${name}` : `${name} (${postCount})`}
    </Link>
  );
};

export default Category;
