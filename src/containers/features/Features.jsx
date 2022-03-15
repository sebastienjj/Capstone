import React from 'react'
import './features.css'

const Features = ({ title, text }) => {
  return (
    <div className="whatApp__features-container__feature">
    <div className="whatApp__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="whatApp__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Features