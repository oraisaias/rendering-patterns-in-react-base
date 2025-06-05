import { useState } from "react";

interface ToggleProps {
  onToggle: () => void;
  isToggled: boolean;
}

export const Toggle:React.FC<ToggleProps> = ({isToggled,onToggle}) => {

  const [internalToggled, setInternalToggled] = useState(isToggled);

  
  const toggle = () => {
    setInternalToggled(!internalToggled);
    onToggle?.();
    
  };
  return (
    <div onClick={
      toggle
    }>
      {internalToggled ? "ON" : "OFF"}
    </div>
  );
};

export const ParentComponent = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <p> Toggle is {isToggled ? "ON": "OFF" } </p>
      <Toggle isToggled={isToggled} onToggle={handleToggle} />
    </div>
  );
};
