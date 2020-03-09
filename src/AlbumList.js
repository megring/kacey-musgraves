import React from 'react'
import { NavLink } from 'react-router-dom'

const AlbumList = () => (
    <nav>
        <ul>
            <li>
                <NavLink exact activeClassName='active' to={process.env.PUBLIC_URL + '/'}>Golden Hour</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to={process.env.PUBLIC_URL + '/KaceyXMas'}>A Very Kacey Christmas</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to={process.env.PUBLIC_URL + '/PageantMaterial'}>Pageant Material</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to={process.env.PUBLIC_URL + '/SameTrailer'}>Same Trailer, Different Park</NavLink>
            </li>
        </ul>
    </nav>
)

export default AlbumList