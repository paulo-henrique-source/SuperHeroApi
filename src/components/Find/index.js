import React, { Fragment, useEffect, useState, } from 'react'
import { findByName } from '../../API/heroAPI'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import FeaturedHero from '../FeaturedHero'
import Header from '../Header'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

function Find() {
    const [hero, setHero] = useState(false);
    const { search } = useLocation()
    const { q } = queryString.parse(search)
    const [featuredData, setFeatured] = useState([])
    const [blackHeader, setblackHeader] = useState(false);
    const [scrollX, setScrollX] = useState(0);
    const [listLength, setlistLength] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = listLength * 450;
        if (window.innerWidth - listW > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    useEffect(async () => {

        const data = await findByName(q)


        if (data !== undefined) {
            setHero(data)
            setlistLength(Object.keys(data).length)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hero not Found!'
            }).then(function () {
                window.location.href = `/`;
            })
        }

        const scrollListener = () => {
            if (window.scrollY > 10) {
                setblackHeader(true);
            } else {
                setblackHeader(false);
            }
        }

        if (data === undefined) {
            return
        } else if (Object.keys(data).length >= 4) {
            document.getElementById('heroesArrow--left').style.display = 'flex'
            document.getElementById('heroesArrow--right').style.display = 'flex'
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    function renderHeaderHeroes() {

        let headerHeroes = [];

        Object.keys(hero).map((x, i) => {
            <div className="heroesRow--left">
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            headerHeroes.push(
                <div className="hero_item" onClick={() => {
                    Swal.fire({
                        icon: 'info',
                        title: 'More Info',
                        html: '<ul className="listAll">' +
                            '<label id="swaat">Name: ' + hero[i]['name'] + '</label>' + '<br/>' +
                            '<label className="swal-label">Power: ' + hero[i]['powerstats']['intelligence'] + '</label>' + '<br/>' +
                            '<label className="swal-label">Work: ' + hero[i]['work']['base'] + '</label>' + '<br/>' +
                            '<label className="swal-label">Appearance: ' + hero[i]['appearance']['gender'] + '</label>' + '<br/>' +
                            '<label className="swal-label">Biography: ' + hero[i]['biography']['full-name'] + '</label>' + '<br/>' +
                            '<label className="swal-label">Connections: ' + hero[i]['connections']['group-affiliation'] + '</label> ' + '<br/>' +
                            '</ul>'
                    })
                }}>
                    <img id={hero[i]['id']} src={hero[i]['image']['url']} />
                    <h3 className="heroName">{hero[i]['name']}</h3>
                </div>
            )
            return headerHeroes
        })
        return headerHeroes
    }

    if (hero != []) {


        return (
            <Fragment>
                <Header black={blackHeader} />

                {featuredData &&
                    <FeaturedHero item={featuredData} />
                }

                <div className="container">

                    <section className="heroes" style={{
                        marginLeft: scrollX,
                        width: (listLength + 1) * 450
                    }}>
                        <h1 className="title">Super Heroes</h1>
                        <div id="heroesArrow--left" className="heroesRow--left" onClick={handleLeftArrow}>
                            <NavigateBeforeIcon style={{ fontSize: 50 }} />
                        </div>
                        <div className="hero_card" >
                            <div>{renderHeaderHeroes()}</div>
                        </div>
                        <div id="heroesArrow--right" className="heroesRow--right" onClick={handleRightArrow}>
                            <NavigateNextIcon style={{ fontSize: 50 }} />
                        </div>
                    </section>

                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <div className="loading">
                    <div id="Loading" className="LoadingGif"></div>
                </div>
            </Fragment>
        )
    }
}

export default Find
