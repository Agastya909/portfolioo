const ToggleButton = ({ setOpen }) => {
  return <button onClick={() => setOpen((prev) => !prev)}>Toggle</button>;
};

export default ToggleButton;
