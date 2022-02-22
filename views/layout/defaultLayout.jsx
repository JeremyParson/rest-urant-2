const React = require('react')

function DefaultLayout(props) {
    return (
        <html>
            <head>
                <title>Bread Crud</title>
                <link rel="stylesheet" href="/style.css"></link>
            </head>
            <body>
                <h2 className='title-header'>BreadCRUD</h2>
                <div>
                    {props.children}
                </div>
            </body>
        </html>
    )
}

module.exports = DefaultLayout