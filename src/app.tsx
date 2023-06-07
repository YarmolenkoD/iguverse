import { Navigator } from '@navigation'
import { ReduxProvider } from '@redux-store'

export default function App() {
  return (
    <ReduxProvider>
      <Navigator />
    </ReduxProvider>
  )
}
