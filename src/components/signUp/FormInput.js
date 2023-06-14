import React, { useState } from 'react'

 const FormInput =(props) =>{
  const [focused, setFocused] = useState(false)
  const {onChange, id, errorMessage, ...inputProps} = props;
  const handleFocus = (e)=>{
    setFocused(true)
  }
  return (
    <div className='form-input'>
        <input className='input-sign input-logIn' {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        onFocus={
          ()=>inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        />
        <span className='error-sms'>{errorMessage}</span>
    </div>
  )
}
export default FormInput

