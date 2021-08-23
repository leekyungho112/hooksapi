import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
      }
    *{
        box-sizing: border-box;
       
    }
      
    body{
        font-family: 'Sunflower', sans-serif;
        font-style: italic;
        font-size: 14px;
        background-color: rgba(20, 20, 20 ,1);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

`;

export default globalStyles;
