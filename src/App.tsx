import routes from './routes'
import { useRoutes } from 'react-router-dom'
import './App.css'

const App: React.FC = () => {
  const element = useRoutes(routes)
  return element
}

export default App
