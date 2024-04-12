import { Link } from "react-router-dom";

function Title({ title }) { 
  return (
    <section className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>{title}</li>
        </ol>
        <h2>{title}</h2>
      </div>
    </section>
  );
}

export default Title;
