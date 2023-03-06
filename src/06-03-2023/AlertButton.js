const AlertButton = ({ handleClick, text }) => {
  // const handleClick = () => {
  //   alert(message);
  // }

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default AlertButton;