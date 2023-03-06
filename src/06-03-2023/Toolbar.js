import AlertButton from './AlertButton';

const Toolbar = () => {

  const onPlayMovie = (evt) => {
    evt.stopPropagation();
    alert('Playing movie');
  };

  return (
    <div 
      style={{ width: '100%', backgroundColor: 'blue', padding: '20px' }}
      onClick={() => alert('Clicked the parent component')}
    >
      <AlertButton
        text="Click me!"
        handleClick={() => alert('A button was clicked!')}
      />
      <AlertButton text="Play movie" handleClick={onPlayMovie} />
    </div>
  );
};

export default Toolbar;

// Event propagation - Event bubbling
// Default behaviour
