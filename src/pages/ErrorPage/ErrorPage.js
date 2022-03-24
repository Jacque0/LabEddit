import React from 'react'
import { ContainerError, Emoji } from './StyleError'

export default function ErrorPage() {
  return (
    <ContainerError>
      <Emoji>:(</Emoji>
      <h1>Error 404: Página não encontrada</h1>
    </ContainerError>
  )
}
