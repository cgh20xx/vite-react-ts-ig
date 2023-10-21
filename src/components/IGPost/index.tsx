import IGUser from 'components/IGUser';
import Comment from './Comment';

type IGPostProps = {
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};

const IGPost: React.FC<IGPostProps> = ({
  account,
  location,
  avatar,
  photo,
  likes,
  description,
  hashTags,
  createTime
}) => {
  return (
    <div className="mb-4 pb-4 shadow-md lg:mb-8">
      <IGUser account={account} location={location} avatar={avatar} />
      <img src={photo} />
      <Comment
        likes={likes}
        account={account}
        description={description}
        hashTags={hashTags}
        createTime={createTime}
      />
    </div>
  );
};

export default IGPost;
