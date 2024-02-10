import { useState } from "react";

export default function Accordion({ children, labelText }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <div className="red">
      <div onClick={handleClick}>{labelText}</div>
      {!!open && <div>{children}</div>}
    </div>
  );
}
