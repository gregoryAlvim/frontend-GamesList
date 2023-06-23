import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      font-size: 62.5%;
   }

   :focus {
      outline: 0;
   }

   body {
      background: ${({ theme }) => theme.background};
      -webkit-font-smoothing: antialiased;
   }

   body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
   }

   ::-webkit-scrollbar {
      width: 0.8rem;
   }

   ::-webkit-scrollbar-thumb {
      width: 5rem;
      border-radius: 0.8rem;  
   }

   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }

`
