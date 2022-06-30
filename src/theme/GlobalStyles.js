import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --sc-bg-color: ${({ theme }) => theme.colors.body};
    --sc-txt-color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
  }
`;
