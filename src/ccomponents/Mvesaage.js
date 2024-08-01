import React from 'react'

function Mvesaage(props) {
  const capital=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1)
  }
  return (props.Alert &&
    <div>
       <div className={`alert alert-${props.Alert.typ} alert-dismissible fade show`} role="alert">
  <strong>{capital(props.Alert.typ)}</strong>:{props.Alert.mess}
</div>

    </div>
  )
}

export default Mvesaage
