import { css, Global, ThemeProvider as TP } from '@emotion/react'
import { theme } from './theme';
import emotionReset from 'emotion-reset';

const styles = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Gotham Black', cursive;
    font-size: 10px;
  }
`

function ThemeProvider({children}: any) {
  return (
    <TP theme={theme}>
      <Global 
        styles={styles} 
      />
      {children}
    </TP>
  );
}

export default ThemeProvider;
