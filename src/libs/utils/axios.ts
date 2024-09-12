import axios, { AxiosError, type AxiosInstance } from 'axios'

import { config } from 'src/constants/config'
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum'
import { clearLS } from './auth'

const convertAxiosEndpoint = (url: string) => {
  // baseUrl/graphql/auth -> baseUrl
  const urlArr = url.split('/')
  urlArr.pop()
  return urlArr.join('/')
}

class Http {
  instance: AxiosInstance
  private token: string
  constructor() {
    console.log("convertAxiosEndpoint(config.baseUrl)",convertAxiosEndpoint(config.baseUrl))
    this.token = localStorage.getItem('token') || ''
    this.instance = axios.create({
      baseURL: convertAxiosEndpoint(config.baseUrl),
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.token && config.headers) {
          // TODO: Should create authorize http for this
          // config.headers.authorization = this.token
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    //Add a response interceptor
      // this.instance.interceptors.response.use(
      //   (response) => {
      //     const responseChangedUploadPath = JSON.parse(
      //       JSON.stringify(response).replaceAll('//usertest3.spobulls.net', '')
      //     )
      //     return responseChangedUploadPath
      //   },
      //   (error: AxiosError) => {
      //     if (
      //       ![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status as number)
      //     ) {
      //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //       const data: any | undefined = error.response?.data
      //       const message = data?.message || error.message
      //       // toast.error(message)
      //     } else {
      //       clearLS()
      //       this.token = ''
      //     }
      //     return Promise.reject(error)
      //   }
      // )
  }
}

const http = new Http().instance

export default http
