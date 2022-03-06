const React = require("react");
const DefaultLayout = require("./layout/defaultLayout.jsx");

function NewBread({ bakers }) {
  return (
    <DefaultLayout>
      <form action="http://localhost:5000/breads/new" method="POST">
        <label for="name">Bread Label:</label>
        <input type="text" name="name"></input>
        <label for="image">Bread Image Link:</label>
        <input type="text" name="image"></input>
        <label for="hasGluten">Has Gluten?</label>
        <input type="checkbox" name="hasGluten"></input>
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker">
          {bakers.map((baker) => {
            return (
              <option value={baker.id} key={baker.id}>
                {baker.name}
              </option>
            );
          })}
        </select>
        <input type="submit"></input>
      </form>
    </DefaultLayout>
  );
}

module.exports = NewBread;
