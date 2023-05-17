interface CategoryProps {
  name: string;
  postCount?: number;
}

const Category = ({ name, postCount }: CategoryProps) => {
  return (
    <div className="px-3 w-fit h-fit text-center cursor-pointer border rounded-xl xs:text-sm md:text-base bg-neutral-200 text-neutral-600 hover:brightness-110 transition">
      {!postCount ? `${name}` : `${name} (${postCount})`}
    </div>
  );
};

export default Category;
