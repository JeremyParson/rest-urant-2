const React = require('react')
const DefaultLayout = require('./layout/defaultLayout.jsx')

function NewBread (props) {
    return (
        <DefaultLayout>
            <form action='http://localhost:5000/bread/new' method="POST">
                <label for="bread-name">Bread Label:</label>
                <input type='text' name="breadName"></input>
                <label for="bread-image-link">Bread Image Link:</label>
                <input type='text' name="breadImage"></input>
                <label for='glutenFree'>Gluten Free?</label>
                <input type='checkbox' name='glutenFree'></input>
                <input type='submit'></input>
            </form>
        </DefaultLayout>
    )
}

module.exports = NewBread
