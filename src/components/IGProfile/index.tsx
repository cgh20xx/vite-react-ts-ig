import IGUser from 'components/IGUser';
import { useAppSelector } from 'hooks';

const IGProfile: React.FC = () => {
  // 好友列表：使用 useAppSelector 取得 store 裡的資料
  const friendReducer = useAppSelector(state => state.friendReducer);
  const friends = friendReducer.friends.slice(0, 5); // 取前 5 筆資料

  return (
    <div className="ml-8 mt-8 p-2">
      <IGUser
        account={'Hank'}
        location={'Hsinchu'}
        avatar={'/images/avatar.png'}
        size="medium"
      />
      <p className="mx4 mb-3 mt-4 text-sm font-bold text-gray-400">
        You are following
      </p>
      {friends.map(item => {
        const { id, account, location, avatar, isFollowing } = item;
        return (
          <div key={id} className="-mt-2">
            <IGUser
              id={id}
              account={account}
              location={location}
              avatar={avatar}
              showFollow
              isFollow={isFollowing}
            />
          </div>
        );
      })}
    </div>
  );
};

export default IGProfile;
