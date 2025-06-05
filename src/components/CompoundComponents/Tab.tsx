interface TabProps {
  label: string;
  children: React.ReactNode;
}
const Tab:React.FC<TabProps> = ({label,children}) => {
  return (
    <>
    <em>{label} </em>
      {children}
    </>
  );
};

export default Tab;
