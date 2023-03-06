const Form = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Submitting!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="surname" />
      <button type="submit">Submit</button>
    </form>
  )
}

// DOM events
// Deklarojeni nje komponente baze ku perdoret nje Button qe ka emrin Change color - te kuqe,
// qe shfrytezohet per ndryshimin e ngjyres se div-it ku eshte ai element
export default Form;