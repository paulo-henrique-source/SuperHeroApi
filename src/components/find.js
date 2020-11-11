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

    useEffect(async () => {
        const data = await findByName(q)

        if (data !== undefined) {
            setHero(data)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hero not Found!'
            })
        }
    }, []);

    function renderHeaderHeroes() {
        let headerHeroes = [];

        Object.keys(hero).map((x, i) => {
            headerHeroes.push(
                <img src={ }></img>

            )
            return headerHeroes

        })
        console.log("noca", hero)

        return headerHeroes
    }

    if (hero != []) {
        return (
            <Fragment>
                <section className="heroes">
                    <div className="hero_image">
                        <h1>{renderHeaderHeroes()}</h1>
                    </div>
                </section>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <h1>Loading</h1>
            </Fragment>
        )
    }
}

export default Find

