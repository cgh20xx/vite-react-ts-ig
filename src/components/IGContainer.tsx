// 注意：這邊要自訂一個 Props 類型，內含可選的 children 屬性，react 會自動將 slot 的內容放到 children 中。
type Props = {
  children?: React.ReactNode;
};

const IGContainer: React.FC<Props> = ({ children }) => {
  return <div className="mx-auto lg:max-w-screen-lg">{children}</div>;
};

export default IGContainer;
