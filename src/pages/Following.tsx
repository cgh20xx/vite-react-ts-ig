import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGUser from 'components/IGUser';
import { useAppSelector } from 'hooks';

const Following: React.FC = () => {
  // 好友列表：使用 useAppSelector 取得 store 裡的資料
  const { friends } = useAppSelector(state => state.friendReducer);

  return (
    <>
      <IGHeader />
      <IGContainer>
        <p className="my-8 px-4 text-2xl font-bold">Following</p>
        <div className="mx-2 shadow-md">
          {friends.map(item => {
            const { id, account, avatar, location, isFollowing } = item;
            return (
              <div className="-mt-3" key={id}>
                <IGUser
                  id={id}
                  account={account}
                  avatar={avatar}
                  location={location}
                  showFollow
                  isFollow={isFollowing}
                />
              </div>
            );
          })}
        </div>
      </IGContainer>
    </>
  );
};

export default Following;
