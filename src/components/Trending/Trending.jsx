import React from 'react';
import '../Trending/Trending.css'

export const Trending = () => {
    return (
        <div className='trending'>
            <h1>Latest Trends</h1>
            <div className="trends-img">
                <div>
                    <img src="https://pbs.twimg.com/media/Fb-mpO2WIAAd8bB?format=jpg&name=4096x4096" alt="" />
                    <p>Shirt with puffed sleeves</p>
                </div>
                <div>
                    <img src="https://pbs.twimg.com/media/Fb-mpO2WIAAd8bB?format=jpg&name=4096x4096" alt="" />
                    <p>Shirt with puffed sleeves</p>
                </div>
                <div>
                    <img src="https://pbs.twimg.com/media/Fb-mpO2WIAAd8bB?format=jpg&name=4096x4096" alt="" />
                    <p>Shirt with puffed sleeves</p>
                </div>
                <div>
                    <img src="https://pbs.twimg.com/media/Fb-mpO2WIAAd8bB?format=jpg&name=4096x4096" alt="" />
                    <p>Shirt with puffed sleeves</p>
                </div>
                <div>
                    <img src="https://pbs.twimg.com/media/Fb-mpO2WIAAd8bB?format=jpg&name=4096x4096" alt="" />
                    <p>Shirt with puffed sleeves</p>
                </div>
            </div>

            <h1>Popular suggestion</h1>

            <div className="suggestions">
                <p>Satin shirts</p>
                <p>Satin shirts</p>
                <p>Satin shirts</p>
                <p>Satin shirts</p>
                <p>Satin shirts</p>
            </div>
        </div>
    )
}
