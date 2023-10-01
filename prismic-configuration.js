import Prismic from 'prismic-javascript'

export const apiEndpoint = process.env.API_ENDPOINT
export const accessToken = process.env.ACCESS_TOKEN

// Client method to query documents from the Prismic repo
export const PrismicClient = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}
