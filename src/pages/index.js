import React from "react"
import Layout from "../layouts/layout"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import {
  space,
  color,
  fontSize,
  width,
  // fontWeight,
  // lineHeight,
  textAlign,
} from "styled-system"

const Style = createGlobalStyle`
* {box-sizing: border-box; }
body {margin: 0}
`

const theme = {
  fontSizes: [12, 14, 16, 24, 100, 48, 64, 96, 128],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    blue: "#07c",
    red: "red",
    green: "#bada55",
    purple: "rebeccapurple",
    black: "#000",
  },
}

const Box = styled.div`
${space}
${width}
${fontSize}
${color}
${textAlign}
`
// the above are utility functions that make props available to the component
// ex. ${color} enables 'color' and 'bg' props on 'Box' component

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  // ...textAlign.propTypes,
}

const Title = styled.h1.attrs({ tabIndex: 0 })`
  font-size: ${props => (props.primary ? "2rem" : "1rem")};
  text-align: center;
  color: black;
  text-transform: uppercase;
  position: relative;

  :hover {
    color: red;
  }
`

const SubTitle = styled(Title)`
  text-transform: capitalize;
  color: ${props => props.fontColor || "inherit"};
  ::before {
    content: "🤯";
    position: absolute;
    top: -10px;
    left: 43%;
    transform: rotate(-20deg);
  }
`

const ReversedTitle = props => (
  <Title {...props} children={props.children.split("").reverse()} />
)

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Style />
      <Title primary>- Welcome -</Title>
      <Title as={ReversedTitle}>Welcome</Title>
      <SubTitle fontColor="purple">Subtitle</SubTitle>
      {/* how do I make this purple reference the theme 'purple' */}
      <Box
        color="purple"
        py={[4, 4]}
        my={[4, 4]}
        mx={["auto"]}
        bg="green"
        fontSize={[4, 5, 6]}
        textAlign="center"
        width={[1, 1, 1 / 2]}
      >
        {/* font size numbers refer to the index in the array defined in 'theme' */}
        This is a box!
      </Box>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
