const React = require('react')
const DefaultLayout = require('./layout/defaultLayout.jsx')

function BreadDetail ({bread}) {
    console.log('=======================', bread)
    return (
        <DefaultLayout>
            <h2>{bread.name}</h2>
            <img alt={bread.name} src={bread.image}/>
            {
                bread.hasGluten ?
                'This is all gluten.' :
                'This is gluten free'
            }
            <p>{bread.getBakedBy()}</p>
            <form action={`/breads/${bread._id}?_method=DELETE`} method="POST">
                <button type='submit' value='DELETE'>Delete</button>
            </form>
            <a href={`/breads/${bread._id}/edit`}><button>Edit</button></a>
            
        </DefaultLayout>
    )
}

module.exports = BreadDetail