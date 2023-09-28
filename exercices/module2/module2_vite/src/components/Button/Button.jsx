/** const Button = (props) => {

  const handleClick = (e) => {
      const deltaAttribute = e.target.dataset.delta;
      const delta = parseInt(deltaAttribute);
      props.changeCount(delta);
  }

  return (
    <button data-delta={props.delta} onClick={handleClick}>
      {props.text}
    </button>
  )
}

export default Button
*/
const Button = ({
  changeCount,
  text,
  delta,
}) => {
  const handleClick = (e) => {
      const deltaAttribute = e.target.dataset.delta;
      const delta = parseInt(deltaAttribute);
      changeCount(delta);
  }

  return (
      <button
          onClick={handleClick}
          data-delta={delta}
      >
          {text}
      </button>
  )
}

export default Button;
