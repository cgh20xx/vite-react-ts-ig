import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGPost from 'components/IGPost';
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
            <IGPost
              account={'abc'}
              location={'Taipei'}
              avatar={'/images/avatars/a1.png'}
              photo={'/images/posts/main1.png'}
              likes={99}
              description={'說明文字'}
              hashTags={'#測試'}
              createTime={'1 天前'}
            />
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
