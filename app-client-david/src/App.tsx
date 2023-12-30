import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import MyRoutes from './routes'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
