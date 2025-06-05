import React, { useState, ReactElement } from "react";
import classes from "./CompoundComponents.module.css";

export interface TabsProps {
  label: string;
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const tabElements = React.Children.toArray(children).filter(
    (child): child is ReactElement => React.isValidElement(child)
  );

  return (
    <div className={classes.Tabs}>
      {tabElements.map((child, index) => (
        <li
          key={index}
          className={` ${index === activeIndex ? classes.TabActive : ""}`}
          onClick={() => handleTabClick(index)}
        >
          {child.props.label}
        </li>
      ))}
      <p className={classes.TabContent}>
        {tabElements[activeIndex] && tabElements[activeIndex].props.children}
      </p>
    </div>
  );
};

export default Tabs;
