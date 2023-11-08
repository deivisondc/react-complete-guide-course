import { useState } from 'react'

export default function Player() {
  const [enteredPlayer, setEnteredPlayer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    setIsSubmitted(false)
    setEnteredPlayer(e.target.value)
  }

  function handleClick() {
    setIsSubmitted(true)
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? enteredPlayer : 'unknown entity'}</h2>
      <p>
        <input type="text" value={enteredPlayer} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
