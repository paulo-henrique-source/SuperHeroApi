import React, { Fragment, useEffect, useState, } from 'react'
import { findByName } from '../API/heroAPI'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

function Find() {
    const [hero, setHero] = useState(false);

    const { search } = useLocation()
    const { q } = queryString.parse(search)
    console.log(q)

    const teste = async () => {
        const data = await findByName()
        console.log(data)
        
    }

    // useEffect(async () => {
    //     const data = await findByName(q)

    //     if (data !== undefined) {
    //         console.log(data[0])
    //     } else {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Hero not Found!'
    //         })
    //     }
    // }, []);

    if (hero != []) {
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
        )
    } else {
        return (
            <Fragment>
                <h1>Loading</h1>
                <button onClick={teste}></button>
            </Fragment>
        )
    }
}

export default Find

