import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`

const Footer = () => {
  return (
    <Section>Footer</Section>
  )
}

export default Footer