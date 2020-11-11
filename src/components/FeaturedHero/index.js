import React from 'react';
import './styles.css';

export default () => {

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://source.unsplash.com/collection/2072161)`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">Become a Super Hero</div>
                </div>
            </div>

        </section>
    )
}
