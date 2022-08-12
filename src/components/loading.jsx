import React from 'react'

const Loading = props => {
  const LOADING_IMG = 'images/loading.gif'

  return (
    <div className="loading">
      <img className="loadingSpinner" src={LOADING_IMG} alt="loading spinner" />
    </div>
  )
}

export default Loading
