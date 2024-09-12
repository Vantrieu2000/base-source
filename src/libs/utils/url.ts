export const convertAdminAssetUrl = (url: string) => {
  return process.env.REACT_APP_ADMIN_API + '/' + url
}
