import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.dark};
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.default};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    cursor: pointer;
    border: none;
    outline: none;
  }

  .section {
    padding: ${({ theme }) => theme.spacing[20]} 0;
  }

  .container {
    max-width: ${({ theme }) => theme.breakpoints.xl};
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing[4]};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
`;
