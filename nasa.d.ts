declare namespace NASA {
  export namespace NeoWs {
    interface APOD {
      copyright: string
      date: string
      explanation: string
      hdurl: string
      media_type: string
      service_version: string
      title: string
      url: string
    }

    interface CloseApproach {
      close_approach_date_full: string
      close_approach_date: string
      epoch_date_close_approach: number
      miss_distance: MissDistance
      orbiting_body: string
      relative_velocity: RelativeVelocity
    }

    interface EstimatedDiameter {
      feet: EstimatedDiameterObject
      kilometers: EstimatedDiameterObject
      meters: EstimatedDiameterObject
      miles: EstimatedDiameterObject
    }

    interface EstimatedDiameterObject {
      estimated_diameter_max: number
      stimated_diameter_min: number
    }

    interface Feed {
      element_count: number
      links: Links
      near_earth_objects: NearEarthObjects
    }

    interface Links {
      near_earth_object_parent?: string
      next?: string
      prev?: string
      self: string
    }

    interface MissDistance {
      astronomical: string
      kilometers: string
      lunar: string
      miles: string
    }

    interface NearEarthObject {
      absolute_magnitude_h: string
      close_approach_data: CloseApproach[]
      estimated_diameter: EstimatedDiameter
      id: string
      is_potentially_hazardous_asteroid: boolean
      is_sentry_object: boolean
      links: Links
      name: string
      nasa_jpl_url: string
      neo_reference_id: string
      orbital_data?: Orbit
    }

    interface NearEarthObjects {
      [key: string]: NearEarthObject[]
    }

    interface Orbit {
      aphelion_distance: string
      ascending_node_longitude: string
      data_arc_in_days: number
      eccentricity: string
      epoch_osculation: string
      equinox: string
      first_observation_date: string
      inclination: string
      jupiter_tisserand_invariant: string
      last_observation_date: string
      mean_anomaly: string
      mean_motion: string
      minimum_orbit_intersection: string
      observations_used: number
      orbit_class: OrbitClass
      orbit_determination_date: string
      orbit_id: string
      orbit_uncertainty: string
      orbital_period: string
      perihelion_argument: string
      perihelion_distance: string
      perihelion_time: string
      semi_major_axis: string
    }

    interface OrbitClass {
      orbit_class_description: string
      orbit_class_range: string
      orbit_class_type: string
    }

    interface RelativeVelocity {
      kilometers_per_hour: string
      kilometers_per_second: string
      miles_per_hour: string
    }

    interface Sentry {
      absolute_magnitude: string
      average_lunar_distance: number
      designation: string
      estimated_diameter: string
      fullname: string
      impact_probability: string
      is_active_sentry_object: boolean
      last_obs_jd: string
      last_obs: string
      links: Links
      palermo_scale_ave: string
      Palermo_scale_max: string
      potential_impacts: string
      sentryId: string
      spkId: string
      torino_scale: string
      url_nasa_details: string
      url_orbital_elements: string
      v_infinity: string
      year_range_max: string
      year_range_min: string
    }

    type SentryObjects = Sentry[]

    interface Stats {
      near_earth_object_count: number
      close_approach_count: number
      last_updated: string
      source: string
      nasa_jpl_url: string
    }
  }
}

export as namespace NASA
