import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error: ', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='container h-screen mx-auto'>
          <div className='text-center flex justify-center items-center flex-col h-full'>
            <h1 className='text-48 mb-8'>문제가 발생했습니다.</h1>
            {this.state.hasError}
            <a href='/' className='text-20 font-semibold border border-white p-8' title='집에가' target='_self'>
              Home
            </a>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
