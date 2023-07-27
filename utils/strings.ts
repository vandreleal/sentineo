import { v1 as uuidv1 } from "uuid"

export const getUniqueName = (name: string) => {
  return `${name}/${uuidv1()}`
}

export const getOrbitViewerLink = (
  name: string,
  orbital_data: NASA.NeoWs.Orbit,
) => {
  const element = {
    a: orbital_data.semi_major_axis,
    ad: orbital_data.aphelion_distance,
    e: orbital_data.eccentricity,
    epoch: orbital_data.epoch_osculation,
    i: orbital_data.inclination,
    label: name,
    ma: orbital_data.mean_anomaly,
    n: orbital_data.mean_motion,
    om: orbital_data.ascending_node_longitude,
    per: orbital_data.orbital_period,
    q: orbital_data.perihelion_distance,
    tp: orbital_data.perihelion_time,
    w: orbital_data.perihelion_argument,
  }

  const url =
    "https://ssd.jpl.nasa.gov/ov/index.html#load=&lookat=SSB&interval=3&eclipticgrid=false"
  const elem = JSON.stringify(element)
    .replace("{", "")
    .replace("}", "")
    .replaceAll('"', "")

  return `${url}&elem=${elem}`
}
