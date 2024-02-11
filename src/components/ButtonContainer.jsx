const ButtonContainer = ({ onButtonClick }) => {
  const buttonName = [
    "(",
    ")",
    "%",
    "AC",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <>
      <div className="buttonContainer">
        {buttonName.map((bn) => (
          <button className="button" onClick={() => onButtonClick(bn)}>
            {bn}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
