import Loading from 'components/Loading';
import Item from './Item';
// import db from '../../../mock/db.json';

import { useGetIGStoriesQuery } from 'services/homeServices';

const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIGStoriesQuery('all');
  return (
    <>
      {isLoading ? (
        <div className="flex h-[110px] w-full items-center justify-center shadow-md lg:my-8">
          <Loading />
        </div>
      ) : (
        <div className="no-scrollbar flex h-[110px] w-full items-center overflow-x-auto overflow-y-hidden shadow-md lg:my-8">
          {data?.map(item => {
            const { id, name, avatar } = item;
            return <Item key={id} name={name} avatar={avatar} />;
          })}
        </div>
      )}
    </>
  );
};

export default IGStory;
