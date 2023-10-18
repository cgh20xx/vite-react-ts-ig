type IGUserProps = {
  id: string;
  account: string;
  location: string;
  avatar: string;
  size?: 'midium' | 'small';
  showFollow?: boolean;
  isFollow?: boolean;
};

const IGUser: React.FC<IGUserProps> = ({
  id,
  account,
  location,
  avatar,
  size = 'small',
  showFollow = false,
  isFollow = false
}) => {
  return (
    <div className="flex h-[40px] items-center px-4">
      <div
        className="h-[40px] w-[40px] rounded-full"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="ml-4">
        <p className="text-sm font-bold">{account}</p>
        <p className="text-xs text-gray-400">{location}</p>
      </div>
      <p className="ml-auto cursor-pointer text-xs font-bold text-gray-700">
        FOLLOWING
      </p>
    </div>
  );
};

export default IGUser;
