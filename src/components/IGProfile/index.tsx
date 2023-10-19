import IGUser from 'components/IGUser';

const IGProfile: React.FC = () => {
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
    <div className="ml-8 mt-8 p-2">
      <IGUser
        account={'Hank'}
        location={'Hsinchu'}
        avatar={'/images/avatar.png'}
        size="midium"
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
