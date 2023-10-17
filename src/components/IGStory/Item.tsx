type ItemProps = {
  name: string;
  avatar: string;
};

const Item: React.FC<ItemProps> = ({ name, avatar }) => {
  return (
    <div>
      <div className="mx-[11px] h-[56px] w-[56px] rounded-full border-2 border-white p-[3px] ring-2 ring-red-500">
        <img
          className="h-full rounded-full object-cover"
          src={avatar}
          alt={name}
        />
      </div>
      <p className="mt-1 text-center text-xs">{name}</p>
    </div>
  );
};

export default Item;
