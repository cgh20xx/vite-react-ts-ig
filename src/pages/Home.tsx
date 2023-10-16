import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGStory from 'components/IGStory';

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <IGStory />
      </IGContainer>
    </>
  );
};

export default Home;
