import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import Cabecalho from './components/Cabecalho'

import themeOrigin from './theme/tema'
import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <ThemeProvider theme={themeOrigin}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
