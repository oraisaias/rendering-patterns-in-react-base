type ChildComponentProps = {
  render: ( name: string ) => JSX.Element;
};
export const ChildComponent: React.FC<ChildComponentProps> = ({render}) => {
  const name = "John Doe";
  return (
    <>
    {render(name)}
    </>
  );
};

export const ParentComponent = () => {
  return (
    <>
    < ChildComponent
      render={(name) => (
        <div>
          <h1>Hello, {name}!</h1>
          <p>Welcome to the Render Props example.</p>
        </div>
      )}
    />
    </>
  );
};
