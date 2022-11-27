import styled from '@emotion/styled'

export const Layout = styled.section`
  display: grid;

  grid-template-areas:
      ". column-1 column-2 .";
  grid-template-columns: [start] auto [line1] 200px [line2] 1000px [line3] auto [end];
`
