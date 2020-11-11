import React, { Fragment, useState, } from 'react'
import { findByName } from '../infra/heroAPI'

function Home() {
  const [hero, setHero] = useState(false);

  const teste = async () => {
    const data = await findByName()
    setHero(data[0])
  }

    return (
      <Fragment>
        <h3>Super Hero Legion</h3>
        <hr />
        <button onClick={teste}></button>
        <ul>
          <li>ID: {hero['id']}</li>
          <li>Name: {hero['name']}</li>
          {/* <li>Power: {hero['powerstats']['intelligence']}</li>
          <li>Work: {hero['work']['base']}</li>
          <li>Appearance: {hero['appearance']['gender']}</li>
          <li>Biography: {hero['biography']['full-name']}</li>
          <li>Connections: {hero['connections']['group-affiliation']}</li>
          <li>Image:</li><img src={hero['image']['url']} ></img> */}
        </ul>
      </Fragment>
    );
  }


export default Home;