import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGUser from 'components/IGUser';

const Following: React.FC = () => {
  // 好友列表：暫用 mock data 之後會打 API 取代。
  const friends = [
    {
      id: '1',
      location: 'Taiwan',
      account: 'max_123',
      isFollowing: false,
      avatar: '/images/avatars/a4.png'
    },
    {
      id: '2',
      location: 'Taiwan',
      account: 'fm_457',
      isFollowing: false,
      avatar: '/images/avatars/a5.png'
    },
    {
      id: '3',
      location: 'Taiwan',
      account: 'joanne_987',
      isFollowing: true,
      avatar: '/images/avatars/a6.png'
    },
    {
      id: '4',
      location: 'Taipei',
      account: 'focus_999',
      isFollowing: true,
      avatar: '/images/avatars/a4.png'
    }
  ];
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
