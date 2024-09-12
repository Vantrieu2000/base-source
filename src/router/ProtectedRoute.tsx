import { Suspense, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MainLayout from 'src/layouts/MainLayout'

function ProtectedRoute() {
  const token = localStorage.getItem('token')
  const [isShowData, setIsShowData] = useState<boolean>(true)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isShowData ? (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ) : (
        <Navigate to='/login' />
      )}
    </Suspense>
  )
}

export default ProtectedRoute
