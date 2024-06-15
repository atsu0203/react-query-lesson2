import { FC } from 'react'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
// import { ClassicalFetchA } from './components/ClassicalFetchA'
// import { ClassicalFetchB } from './components/ClassicalFetchB'
// import { StateProvider } from './context/StateProvider'
import Layout from './components/Layout'
// import { ReactQueryA } from './components/ReactQueryA'
// import { ReactQueryB } from './components/ReactQueryB'
// import { MainContext } from './components/MainContext'
// import { MainRTKit } from './components/MainRTKit'

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// })

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>App</Layout>
    </BrowserRouter>
  )
}

export default App
