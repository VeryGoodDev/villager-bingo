import { h, render } from 'preact'
import App from './components/App'
import { AppProvider } from './components/AppContext'

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector(`#root`)
)
