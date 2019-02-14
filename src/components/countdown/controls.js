import React from 'react'

const Controls = ({pause, onPauseToggle}) => (
  <div className="field is-grouped is-grouped-centered">
    <p className="control">
      <button className="button is-danger is-outlined is-rounded" disabled={pause} onClick={onPauseToggle}>
        Pause
      </button>
    </p>
    <p className="control">
      <button className="button is-success is-outlined is-rounded" disabled={!pause} onClick={onPauseToggle}>
        Resume
      </button>
    </p>
  </div>
)

export default Controls