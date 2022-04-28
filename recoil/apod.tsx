import getConfig from 'next/config'

import { subDays } from 'date-fns'
import { selector } from 'recoil'

import { formatDate } from '@/utils/date'
import { getUniqueName } from '@/utils/strings'

const {
  publicRuntimeConfig: { HOST, API_KEY },
} = getConfig()

// Get APOD: Astronomy Picture of the Day
export const queryAPOD = selector({
  key: getUniqueName('QueryAPOD'),
  get: async () => {
    const now = new Date()
    const today = formatDate(now)
    const yesterday = formatDate(subDays(now, 1))

    // Retrieve the APOD
    const response = await fetch(`${HOST}/planetary/apod?&api_key=${API_KEY}&date=${today}`)
    const json = await response.json()

    // Retrieve the previous APOD if today's image is not available.
    if (json && json.code === 404) {
      const prevResponse = await fetch(`${HOST}/planetary/apod?&api_key=${API_KEY}&date=${yesterday}`)

      const prevJson = await prevResponse.json()

      return prevJson
    }

    return json
  },
})
