import * as React from "react";
import { MouseEvent } from "react";

type Props = {
  data: number;
  //   handleClick: Function;
  handleClick(e: MouseEvent, num: number): void;
};
const Header = ({ handleClick, data }: Props) => {
  console.log(data);
  return (
    <div>
      This is Header
      <button onClick={(e) => handleClick(e, 2)}>Add +2</button>
    </div>
  );
};

export default Header;
