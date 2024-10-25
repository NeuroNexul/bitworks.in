export const randomNames = [
  "Arabella Gardner",
  "Alan Ortega",
  "Lilah Quintana",
  "Kelvin Heath",
  "Amani Berg",
  "Cayson Case",
  "Cleo Curry",
  "Briggs Garrison",
  "Cadence Mahoney",
  "Kamryn Turner",
  "Brooklyn Hopkins",
  "Ali Sanders",
  "Everleigh York",
  "Leandro Bell",
  "Melody Salinas",
  "Edgar Osborne",
];

export const getRandomName = () => {
  return randomNames[Math.floor(Math.random() * randomNames.length)];
};

export const randomProjectsNames = [
  "cloudflow",
  "devtracker",
  "taskmaster",
  "codehub",
  "dataviewer",
  "scriptforge",
  "pixelcraft",
  "logiq",
  "aipilot",
  "netmate",
  "bugbuster",
  "syncwave",
  "buildzone",
  "streamsync",
  "infographix",
  "meshnet",
];

export const getRandomProjectName = () => {
  return randomProjectsNames[Math.floor(Math.random() * randomProjectsNames.length)];
}
