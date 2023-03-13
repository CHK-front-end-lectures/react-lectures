// Krijoni 3 butona te cilat nuk kane text, jane te rrumbullaket edhe qe kane ngjyrat e semaforit (kuqe, te verdhe, te gjelbert)
// Duke shfrytezuar state, te deklarohet teksti i cili ai buton qe klikohet ka indikacion ne te
// Klikohet e kuqe - Stop!
/// Klikohet e verdhe - Get ready!
// Klikohet e gjelbert - GO!

// Hints: useState, conditional renderings (ternary operator ose &&)
import { useState } from 'react';

const TrafficSign = () => {
  const [sign, setSign] = useState('red');

  const handleRedClick = () => {
    setSign('red');
  }

  const handleOrangeClick = () => {
    setSign('orange');
  }

  const handleGreenClick = () => {
    setSign('green');
  }

  const showTrafficText = () => {
    switch(sign) {
      case 'red': {
        return 'Stop'
      }
      case 'orange': {
        return 'Get ready!'
      }
      default: {
        return 'Go!'
      }
    }
  }

  return (
    <div>
      <div className="traffic-signs">
        <button className="traffic-sign red" onClick={handleRedClick}>

        </button>
        <button className="traffic-sign orange" onClick={handleOrangeClick}>

        </button>
        <button className="traffic-sign green" onClick={handleGreenClick}>

        </button>
      </div>

      {/* {sign === 'red' ? 'Stop' : sign === 'orange' ? 'Get ready!' : 'GO!'} */}
      {showTrafficText()}
    </div>
  )
}

export default TrafficSign;