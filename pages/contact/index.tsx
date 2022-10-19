import { useState } from "react";
import Header from "../../components/Header";
import { MouseEvent } from "react";

const Contact = () => {
  const [data, setData] = useState<number>(0);

  function handleClick(e: MouseEvent, num: number) {
    console.log(e);
    setData(data + num);
  }
  const players: { name: string; age: number }[] = [{ name: "john", age: 0 }];
  players[1] = { name: "doe", age: 2 };

  console.log(players);
  return (
    <div>
      Contact pages
      <button onClick={(e) => handleClick(e, 1)}>Add +1</button>
      <Header handleClick={handleClick} data={data} />
      {data}
    </div>
  );
};

export default Contact;
