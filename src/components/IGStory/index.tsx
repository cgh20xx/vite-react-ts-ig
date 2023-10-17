import Item from './Item';
import db from '../../../mock/db.json';

const IGStory: React.FC = () => {
  const data = db.stories;
  return (
    <div className="no-scrollbar flex h-[110px] w-full items-center overflow-x-auto overflow-y-hidden shadow-md lg:my-8">
      {data.map(item => {
        const { id, name, avatar } = item;
        return <Item key={id} name={name} avatar={avatar} />;
      })}
    </div>
  );
};

export default IGStory;
