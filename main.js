
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
  const teamName = document.querySelector('input').value
  try {
    const response = await fetch(`https://f1-app-api.herokuapp.com/api/${teamName}`)
    const data = await response.json()
    console.log(data)

    document.getElementById('logo').src = data.logo
    document.getElementById('fullTeamName').innerText = data.fullTeamName
    document.getElementById('base').innerText = data.base
    document.getElementById('teamChief').innerText = data.teamChief
    document.getElementById('chasis').innerText = data.chasis
    document.getElementById('powerUnit').innerText = data.powerUnit
    document.getElementById('firstTeamEntry').innerText = data.firstTeamEntry
    document.getElementById('worldChampionships').innerText = data.worldChampionships
    document.getElementById('firstPlaceFinishes').innerText = data.firstPlaceFinishes
    document.getElementById('polePositions').innerText = data.polePositions
    document.getElementById('fastestLap').innerText = data.fastestLap

    document.getElementById('driverOneImg').src = data.driverOneImage
    document.getElementById('driverOneName').innerText = data.driverOne
    
    document.getElementById('driverTwoImg').src = data.driverTwoImage
    document.getElementById('driverTwoName').innerText = data.driverTwo
    
  } catch (error) {
    console.log(error)
  }
}
