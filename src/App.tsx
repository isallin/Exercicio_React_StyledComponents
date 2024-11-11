import { ThemeProvider } from 'styled-components'

import EstiloGlobal from './global'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container } from './global'

import cores from './components/Cores'

function App() {
  return (
    <ThemeProvider theme={cores}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
