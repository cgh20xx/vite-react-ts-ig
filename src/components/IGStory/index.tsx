import Item from './Item';

const IGStory: React.FC = () => {
  return (
    <div className="flex h-[110px] w-full items-center overflow-x-auto overflow-y-hidden shadow-md lg:my-8">
      <Item name="Hank" avatar="/images/avatars/a1.png" />
      <Item name="Hank" avatar="/images/avatars/a1.png" />
      <Item name="Hank" avatar="/images/avatars/a1.png" />
    </div>
  );
};

export default IGStory;
