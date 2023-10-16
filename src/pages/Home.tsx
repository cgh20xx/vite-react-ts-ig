import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <h1 className="text-3xl font-bold text-red-500">Home</h1>
      </IGContainer>
    </>
  );
};

export default Home;
