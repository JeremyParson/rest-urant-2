const React = require('react')
const DefaultLayout = require('./layout/defaultLayout.jsx')

function BreadDetail ({bread}) {
    return (
        <DefaultLayout>
            <h2>{bread.name}</h2>
            <img alt={bread.name} src={bread.image}/>
            {
                bread.hasGluten ?
                'This is all gluten.' :
                'This is gluten free'
            }
        </DefaultLayout>
    )
}

module.exports = BreadDetail