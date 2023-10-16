import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGStory from 'components/IGStory';

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex justify-between">
          <div className="w-full lg:w-[600px]">
            <IGStory />
          </div>
          <div className="hidden w-[424px] lg:block">IGProfile</div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
