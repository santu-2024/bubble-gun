import React from 'react'

export default function Title({ text, children }) {
  return (
    <h1>
      {text}
      {children}
    </h1>
  )
}