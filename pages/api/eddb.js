//  https://elitebgs.app/apis/eddb

export const systems = (system) => {
  return fetch(`https://eddbapi.kodeblox.com/api/v4/systems?name=${system}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}

export const commodities = () => {
  fetch('https://eddb.io/archive/v6/commodities.json',
  {
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, sdch'
    // // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}