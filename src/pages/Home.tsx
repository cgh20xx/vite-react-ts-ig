import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGPost from 'components/IGPost';
import IGStory from 'components/IGStory';
import IGProfile from 'components/IGProfile';
import db from '../../mock/db.json';

const IGPostList: React.FC = () => {
  const data = db.posts;
  return (
    <>
      {data?.map(post => {
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
      })}
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
