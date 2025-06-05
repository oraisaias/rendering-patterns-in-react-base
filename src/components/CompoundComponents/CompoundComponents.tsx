import { useState } from "react";
import Tab from "./Tab";
import Tabs from "./Tabs";

export const CompoundComponents = () => {


  return (
    <Tabs label="Compound Components Example">
      <Tab label="Tab 1" >
        <p>This is the content of Tab 1</p>
      </Tab>
      <Tab label="Tab 2" >
        <p>This is the content of Tab 2</p>
      </Tab>
      <Tab label="Tab 3" >
        <p>This is the content of Tab 3</p>
      </Tab>
    </Tabs>
  );
};
