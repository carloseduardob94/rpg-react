import { Container, Map } from './styles/App.styles';
import { Character } from './components/Character'

const App = () => {
  return(
    <Container>
      <Map>
        <Character x={5} y={0}/>
      </Map>
    </Container>
  )
}

export default App