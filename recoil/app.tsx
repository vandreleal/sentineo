import { atom, selector } from 'recoil'

import { getUniqueName } from '@/utils/strings'

// App State
export const appState = atom({
  key: getUniqueName('AppState'),
  default: {
    estimated_diameter: 'kilometers',
    miss_distance: 'kilometers',
    relative_velocity: 'kilometers_per_second',
  },
})

// App State Detailed
export const appStateDetailed = selector({
  key: getUniqueName('AppStateDetailed'),
  get: ({ get }) => {
    const app = get(appState)
    const { estimated_diameter, miss_distance, relative_velocity } = app

    const detailedState = {
      estimated_diameter: {
        value: estimated_diameter,
        label: estimated_diameter,
        unit: null,
      },
      miss_distance: {
        value: miss_distance,
        label: miss_distance,
        unit: null,
      },
      relative_velocity: {
        value: relative_velocity,
        label: relative_velocity.replace(/_/g, ' '),
        unit: null,
      },
    }

    switch (estimated_diameter) {
      case 'kilometers':
        detailedState.estimated_diameter.unit = 'km'
        break
      case 'meters':
        detailedState.estimated_diameter.unit = 'm'
        break
      case 'miles':
        detailedState.estimated_diameter.unit = 'mi'
        break
      case 'feet':
        detailedState.estimated_diameter.unit = 'ft'
        break
    }

    switch (miss_distance) {
      case 'astronomical':
        detailedState.miss_distance.unit = 'au'
        break
      case 'lunar':
        detailedState.miss_distance.unit = 'LD'
        break
      case 'kilometers':
        detailedState.miss_distance.unit = 'km'
        break
      case 'miles':
        detailedState.miss_distance.unit = 'mi'
        break
    }

    switch (relative_velocity) {
      case 'kilometers_per_second':
        detailedState.relative_velocity.unit = 'km/s'
        break
      case 'kilometers_per_hour':
        detailedState.relative_velocity.unit = 'km/h'
        break
      case 'miles_per_hour':
        detailedState.relative_velocity.unit = 'mi/s'
        break
    }

    return detailedState
  },
})
