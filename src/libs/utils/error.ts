import { ApolloError } from '@apollo/client'
import { toast } from 'react-toastify'

/**
 * DESCRIPTION: some errors will validate on server side with third party library,
 * it auto return { message: 'validation', validations: { field: ['error message'] }
 */
export const checkValidationErrorServer = (error: ApolloError) => {
  return error.graphQLErrors?.length > 0 && error.graphQLErrors?.[0]?.message === 'validation'
}

/**
 * DESCRIPTION: show validation error from server first, after user by pass validations client
 */
export const showValidationErrorServer = (error: ApolloError) => {
  if (checkValidationErrorServer(error)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const fieldsErrors = error.graphQLErrors[0].validations
    for (const field in fieldsErrors) {
      toast.error(fieldsErrors[field][0])
    }
  }
}

/**
 * DESCRIPTION: show network error, like 500, 404, 403, etc
 */

export const showNetworkError = (error: ApolloError) => {
  const networkError = error.networkError
  if (networkError) {
    // for other behavior need to check status code
    // const statusCode = networkError.result.statusCode
    if (networkError.name === 'ServerError') {
      toast.error('문제가 발생했습니다. 나중에 다시 시도 해주십시오.')
    }
  }
}

/**
 * DESCRIPTION: show errors response from server. like password not match, email already exist, etc
 */
export const showErrorsResponse = (error: ApolloError) => {
  // NOT SHOW "validation" at here
  if (checkValidationErrorServer(error)) return

  const errors = error.graphQLErrors
  if (errors) {
    errors.forEach((error) => {
      toast.error(error.message)
    })
  }
}

export const showErrorToast = (error: ApolloError) => {
  // show validation error first -> show errors response -> show network error
  showValidationErrorServer(error)
  showErrorsResponse(error)
  showNetworkError(error)
}
