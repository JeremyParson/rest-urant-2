const React = require("react");
const DefaultLayout = require("./layout/defaultLayout.jsx");

function Index({ breads, bakers }) {
  return (
    <DefaultLayout>
      <h2>Index Page</h2>
      <h3>Bakers</h3>
      <ul>
        {bakers.map((baker) => {
          return (
            <li key={baker._id}>
              <a href={`/bakers/${baker.id}`}>{baker.name}</a>
            </li>
          );
        })}
      </ul>
      <h3>Breads</h3>
      {breads.map((bread, index) => {
        return (
          <div>
            <a href={`/breads/${bread._id}`}>
              <span>{bread.name}</span>:
            </a>
            {bread.hasGluten ? "It has gluten" : "Gluten-free!"}
          </div>
        );
      })}
    </DefaultLayout>
  );
}

module.exports = Index;
