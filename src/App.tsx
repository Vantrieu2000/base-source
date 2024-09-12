import AOS from 'aos'
import 'aos/dist/aos.css'
import { Suspense, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import useRouteElements from './router/Router'

function App() {
  const routeElements = useRouteElements()
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div />}>{routeElements}</Suspense>
        <ToastContainer position='top-center' />
      </ErrorBoundary>
    </>
  )
}

export default App
