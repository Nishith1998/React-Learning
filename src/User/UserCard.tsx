// import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

import React from "react";
import Card from "../UI/Card";

export default (props: { username: string; age: number }) => {
  return (
    <React.Fragment>
      <Card className="flex flex-row justify-between gap-4 bg-slate-500">
        <div>{props.username}</div>
        <div>{props.age}</div>
      </Card>
    </React.Fragment>
  );
};
