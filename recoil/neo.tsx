import getConfig from 'next/config'

import { selectorFamily } from 'recoil'

const {
  publicRuntimeConfig: { HOST, API_KEY },
} = getConfig()

// Retrieve a paginated list of Near Earth Objects
export const queryNeoBrowse = selectorFamily({
  key: 'QueryNeoBrowse',
  get: (page: number) => async () => {
    const response = await fetch(`${HOST}/neo/rest/v1/neo/browse?page=${page}&size=20?&api_key=${API_KEY}`)

    return response.json()
  },
})

// Retrieve a Near Earth Objects with a given id
export const queryNeoAsteroid = selectorFamily({
  key: 'QueryNeoAsteroid',
  get: (id: string) => async () => {
    const response = await fetch(`${HOST}/neo/rest/v1/neo/${id}?&api_key=${API_KEY}`)

    return response.json()
  },
})
