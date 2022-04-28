import getConfig from 'next/config'

import { endOfDay, format, startOfDay, subDays } from 'date-fns'
import { atom, selector } from 'recoil'

import { getUniqueName } from '@/utils/strings'

// Get HOST and API_KEY environment variables
const {
  publicRuntimeConfig: { HOST, API_KEY },
} = getConfig()

// Today
const today = new Date()

// Query State
export const queryState = atom({
  key: getUniqueName('QueryState'),
  default: {
    startDate: startOfDay(today),
    endDate: endOfDay(today),
  },
})

// Get a list of Near Earth Objects within a date range, The max range in one query is 7 days
export const queryFeedParameters = selector({
  key: getUniqueName('QueryFeedParameters'),
  get: async ({ get }) => {
    const { startDate, endDate } = get(queryState)

    // Format Dates
    const start = format(subDays(startDate, 0), 'yyyy-MM-dd')
    const end = format(endDate, 'yyyy-MM-dd')

    const response = await fetch(
      `${HOST}/neo/rest/v1/feed?start_date=${start}&end_date=${end}&detailed=false&api_key=${API_KEY}`,
    )

    return response.json()
  },
})

// Get a list of Near Earth Objects for today
export const queryFeedToday = selector({
  key: getUniqueName('QueryFeedToday'),
  get: async () => {
    const response = await fetch(`${HOST}/neo/rest/v1/feed/today?detailed=false&api_key=${API_KEY}`)

    return response.json()
  },
})
