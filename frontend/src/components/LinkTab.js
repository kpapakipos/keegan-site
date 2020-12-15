import React from 'react'
import { Tab } from '@material-ui/core'

function LinkTab ({ label, href, ...rest }) {
  return (
    <Tab
      component='a'
      label={label}
      href={href}
      {...rest}
    />
  )
}

export default LinkTab
