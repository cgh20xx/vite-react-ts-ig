import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGStory from 'components/IGStory';
import IGUser from 'components/IGUser';

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex justify-between">
          <div className="w-full lg:w-[600px]">
            <IGStory />
          </div>
          <div className="hidden w-[424px] lg:block">
            IGProfile
            <IGUser
              id={'123'}
              account={'abc123'}
              location={'Hsinchu'}
              avatar={'/images/avatars/a2.png'}
              size="small"
              showFollow
              isFollow
            />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
