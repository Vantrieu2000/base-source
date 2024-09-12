import { Outlet, useRoutes } from 'react-router-dom'
import path from 'src/constants/path'
import MainLayout from 'src/layouts/MainLayout'
import HomePage from 'src/pages/HomePage'
import ProtectedRoute from './ProtectedRoute'

// eslint-disable-next-line import/default, import/namespace, import/no-named-as-default, import/no-named-as-default-member

export default function Router() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          element: (
            <MainLayout>
              <div data-aos='fade-up' className='h-full lg:h-auto'>
                <Outlet />
              </div>
            </MainLayout>
          ),
          children: [
            {
              path: path.home,
              element: <HomePage />
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: (
        <MainLayout>
          <div data-aos='fade-up' className='h-full'></div>
        </MainLayout>
      )
    }
  ])

  return routeElements
}
