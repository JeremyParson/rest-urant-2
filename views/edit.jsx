const React = require("react");
const Default = require("./layout/defaultLayout.jsx");

function Edit({ bread, bakers }) {
  return (
    <Default>
      <h2>Edit a bread</h2>
      <form action={`http://localhost:5000/breads/${bread._id}/edit`} method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={bread.name}
        />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" defaultValue={bread.image} />
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input
          type="checkbox"
          name="hasGluten"
          id="hasGluten"
          defaultChecked={bread.hasGluten}
        />
        <select name="baker" id="baker" defaultValue={bread.baker}>
          {bakers.map((baker) => {
            return (
              <option value={baker.id} key={baker.id}>
                {baker.name}
              </option>
            );
          })}
        </select>
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}

module.exports = Edit;
