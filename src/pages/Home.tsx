import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGPost from 'components/IGPost';
import IGStory from 'components/IGStory';
import IGProfile from 'components/IGProfile';
import { useGetIGPostsQuery } from 'services/homeServices';
import Loading from 'components/Loading';

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery('all');
  return (
    <>
      {isLoading ? (
        <div className="flex aspect-square animate-pulse items-center justify-center bg-gray-100 pb-4 shadow-md lg:mb-8">
          <Loading />
        </div>
      ) : (
        data?.map(post => {
          const {
            id,
            account,
            location,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime
          } = post;
          return (
            <IGPost
              key={id}
              account={account}
              location={location}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
            />
          );
        })
      )}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex justify-between">
          <div className="w-full lg:w-[600px]">
            <IGStory />
            <IGPostList />
          </div>
          <div className="hidden w-[424px] lg:block">
            <IGProfile />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
