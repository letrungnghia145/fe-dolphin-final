import { Link } from "react-router-dom";

export const TabBoard = () => {
  return (
    <div className="tabulation-2">
      <ul className="nav nav-pills nav-fill d-md-flex d-block">
        <li className="nav-item">
          <Link className="nav-link py-3 active" data-toggle="tab" to="#home1">
            <i className="fa fa-key" aria-hidden="true"></i> {/* sths gone here */}
          </Link>
        </li>
        <li className="nav-item px-lg-2">
          <Link className="nav-link py-3" data-toggle="tab" to="#home2">
          <i className="fa fa-key" aria-hidden="true"></i> Password
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link py-3" data-toggle="tab" to="#home3">
            <i className="fa fa-ban" aria-hidden="true"></i> Lock account
          </Link>
        </li>
      </ul>
      <div className="tab-content rounded mt-2">
        <div className="tab-pane container p-4 active" id="home1">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="tab-pane container p-4 fade" id="home2">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="tab-pane container p-4 fade" id="home3">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
    </div>
  );
};
