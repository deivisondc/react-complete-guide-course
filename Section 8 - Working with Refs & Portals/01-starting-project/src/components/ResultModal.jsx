import { forwardRef, useImperativeHandle, useRef } from "react"

function ResultModal({ timeRemaining, targetTime, onReset }, ref) {
  const dialog = useRef()

  const userLost = timeRemaining <= 0
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2)
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })
  
  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score} </h2>}

      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>{formattedTimeRemaining} seconds left.</strong></p>

      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  )
}

export default forwardRef(ResultModal)