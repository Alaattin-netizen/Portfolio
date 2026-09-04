import process from 'node:process'

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig()
  const studioAuth = config.studio?.auth

  if (!studioAuth?.github) {
    return
  }

  process.env.STUDIO_GITHUB_CLIENT_ID
    ??= studioAuth.github.clientId

  process.env.STUDIO_GITHUB_CLIENT_SECRET
    ??= studioAuth.github.clientSecret
})
