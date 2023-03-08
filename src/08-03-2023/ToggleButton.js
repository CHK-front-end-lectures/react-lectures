// Deklarojeni nje komponente baze ku perdoret nje Button qe ka emrin Change color - te kuqe,
// qe shfrytezohet per ndryshimin e ngjyres se div-it ku eshte ai element
const ToggleButton = () => {
  
  const handleClick = () => {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'blue') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'blue';
    }
  }
  return (
    <button onClick={handleClick}>
      Toggle the light
    </button>
  )
}

export default ToggleButton