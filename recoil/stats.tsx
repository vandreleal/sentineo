import getConfig from 'next/config'

import { selector } from 'recoil'

import { getUniqueName } from '@/utils/strings'

const {
  publicRuntimeConfig: { HOST, API_KEY },
} = getConfig()

// Retrieve current NEO statistics
export const queryStats = selector({
  key: getUniqueName('QueryStats'),
  get: async () => {
    const response = await fetch(`${HOST}/neo/rest/v1/stats?api_key=${API_KEY}`)

    return response.json()
  },
})
