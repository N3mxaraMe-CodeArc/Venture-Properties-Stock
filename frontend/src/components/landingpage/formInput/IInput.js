import React from 'react'
import PropTypes from 'prop-types'

const IInput = ({ label, type, placeholder, currentref, onChange,value }) => {

  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">{label}</span>
      </div>
      <input type={type} ref={currentref} onChange={onChange} class="form-control" value={value} aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder={placeholder} />
    </div>
  )
}



export default IInput;

IInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  currentref: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}



