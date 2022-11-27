import { useState } from "react";

type Props = {
  label: string;
  options: Array<{ label: string; onClick: () => void }>;
};

const Menu = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="my-1 p-3 relative">
        <button
          className="text-2xl text-white"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {props.label}
        </button>
        {open && (
          <ul
            className="absolute p-2 bg-white"
            style={{
              borderRadius: 2,
            }}
          >
            {props.options.map((el) => (
              <li onClick={() => setOpen((prev) => !prev)}>{el.label}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Menu;
