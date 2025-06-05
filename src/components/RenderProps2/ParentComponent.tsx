import { useState } from "react";

interface ParentComponentProps {
  // Define any props if needed
   render: (data: string[]) => React.ReactNode
}


const ParentComponent:React.FC<ParentComponentProps> = ({render}) => {
   const [data] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);
    return (<ul>{render(data)}</ul>)
};

export default ParentComponent;
