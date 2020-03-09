import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GoldenHour from './GoldenHour'
import KaceyXMas from './KaceyXMas'
import PageantMaterial from './PageantMaterial'
import SameTrailer from './SameTrailer'

const AlbumInfo = () => (
    <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={GoldenHour} />
        <Route path={process.env.PUBLIC_URL + '/KaceyXMas'} component={KaceyXMas} />
        <Route path={process.env.PUBLIC_URL + '/PageantMaterial'} component={PageantMaterial} />
        <Route path={process.env.PUBLIC_URL + '/SameTrailer'} component={SameTrailer} />
    </Switch>
)

export default AlbumInfo