import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
html{
    scroll-behavior: smooth;
    &::-webkit-scrollbar{
        width: .6rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #fff;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
    background-color: white;
    background-image: linear-gradient(to top, yellow, red);
  }
}
body{
    width: 100%;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
background-color: #151515;
color: white;
h2{
    font-size: 3rem;
}
h3{
    padding-top: 1rem;
    font-size: 1.3rem;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
}
a,a:link,a:visited{
    text-decoration: none;
}
}
`;
export default GlobalStyle;
