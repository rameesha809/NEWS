import React from 'react'
export default function Spinner() {
  return (
    <div style={{marginTop:"10%", marginBottom:"10%"}}>
      <img src={`${process.env.PUBLIC_URL}/spin.gif`} alt="spinner for loading" />
    </div>
  )
}
