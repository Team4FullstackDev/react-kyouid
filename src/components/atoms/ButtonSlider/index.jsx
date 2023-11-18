const ButtonSlider = (props) => {
  const { onClickHandler, classname, text } = props;

  return (
    <button className={classname} onClick={onClickHandler}>
      {text}
    </button>
  );
};
export default ButtonSlider;
