const React = require('react')
const DefaultLayout = require('./layout/defaultLayout.jsx')

function Index (props) {
    return (
        <DefaultLayout>
             <h2>Index Page</h2>
            { props.bread.map((bread, index) => {
                return (
                    <div>
                        <a href={`/bread/${index}`}>
                            <span>{bread.name}</span>:
                        </a>
                        {bread.hasGluten ? "It has gluten" : "Gluten-free!"}
                    </div>
                )
            })}
        </DefaultLayout>
    )
}

module.exports = Index