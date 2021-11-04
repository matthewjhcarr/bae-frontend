import React from 'react'
import { NavLink } from "react-router-dom"

export const MailToButton = ({ mailto, label }) => {
  return (
    <NavLink
      to='#'
      onClick={(e) => {
        window.location = mailto
        e.preventDefault()
      }}
      className='help'
    >
      {label}
    </NavLink>
  )
}

export default MailToButton