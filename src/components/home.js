import React, { Fragment, useState, useEffect, } from 'react'
import axios from 'axios'

function Home() {
  const [location, setLocation] = useState(false);
  const [hero, setHero] = useState(false);
  const key = process.env.REACT_APP_OPEN_SECRET_KEY

  let getHero = async (lat, long) => {
    let res = await axios.get('https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/' + key + '/644', {
    });
    setHero(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getHero(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  }, [])

  if (location === false) {
    return (
      <Fragment>
        A Liga da Justiça precisa da Sua localização !
      </Fragment>
    )
  } else if (hero === false) {
    return (
      <Fragment>
        Carregando Base de Dados da Liga da Justiça
      </Fragment>
    )
  }
  else {
    return (
      <Fragment>
        <h3>Super Hero Legion</h3>
        <hr />
        <ul>
          <li>ID: {hero['id']}</li>
          <li>Name: {hero['name']}</li>
          <li>Power: {hero['powerstats']['intelligence']}</li>
          <li>Work: {hero['work']['base']}</li>
          <li>Appearance: {hero['appearance']['gender']}</li>
          <li>Biography: {hero['biography']['full-name']}</li>
          <li>Connections: {hero['connections']['group-affiliation']}</li>
          <li>Image:</li><img src={hero['image']['url']} ></img>
        </ul>
      </Fragment>
    );
  }

}

export default Home;