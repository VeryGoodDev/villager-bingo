import { h, render } from 'preact'
import App from './components/App'
import { AppProvider } from './components/AppContext'
import { EscapeHandlerProvider } from './components/useEscapeHandler'

render(
  <AppProvider>
    <EscapeHandlerProvider>
      <App />
    </EscapeHandlerProvider>
  </AppProvider>,
  document.querySelector(`#root`)
)
