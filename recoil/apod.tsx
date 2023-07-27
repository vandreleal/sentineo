import getConfig from "next/config"

import { selector } from "recoil"

import { appState } from "@/recoil/app"
import { formatDate } from "@/utils/date"
import { getUniqueName } from "@/utils/strings"

const {
  publicRuntimeConfig: { HOST, API_KEY },
} = getConfig()

// Get APOD: Astronomy Picture of the Day
export const queryAPOD = selector({
  key: getUniqueName("QueryAPOD"),
  get: async ({ get }) => {
    const { date } = get(appState)

    const formattedDate = formatDate(date)

    // Retrieve the APOD
    const response = await fetch(
      `${HOST}/planetary/apod?&api_key=${API_KEY}&date=${formattedDate}`,
    )
    const json = await response.json()

    return json
  },
})
