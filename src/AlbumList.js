import React from 'react'
import { NavLink } from 'react-router-dom'

const AlbumList = () => (
    <nav>
        <ul>
            <li>
                <NavLink exact activeClassName='active' to='/'>Golden Hour</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/KaceyXMas'>A Very Kacey Christmas</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/PageantMaterial'>Pageant Material</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/SameTrailer'>Same Trailer, Different Park</NavLink>
            </li>
        </ul>
    </nav>
)

export default AlbumList