import { Header } from 'antd/es/layout/layout'

interface AuthLayoutProps {
  children?: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <Header />
}
