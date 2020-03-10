import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GoldenHour from './GoldenHour'
import KaceyXMas from './KaceyXMas'
import PageantMaterial from './PageantMaterial'
import SameTrailer from './SameTrailer'

const AlbumInfo = () => (
    <Switch>
        <Route exact path='/' component={GoldenHour} />
        <Route path='/KaceyXMas' component={KaceyXMas} />
        <Route path='/PageantMaterial' component={PageantMaterial} />
        <Route path='/SameTrailer' component={SameTrailer} />
    </Switch>
)

export default AlbumInfo