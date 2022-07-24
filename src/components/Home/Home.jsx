import "./home.css";
import { useState } from "react";
import Table from "../Table/Table";
import ReactPaginate from "react-paginate";

const Home = ({ cities }) => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const keys = ["name"];

  const citiesPerPage = 3;
  const citiesVisited = pageNumber * citiesPerPage;
  const pageCount = Math.ceil(cities.length / citiesPerPage);

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="home">
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="Search places..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Table
          cities={search(cities).slice(
            citiesVisited,
            citiesVisited + citiesPerPage
          )}
        />
      </div>
      <div className="pagination">
        <ReactPaginate
          previousAriaLabel={"Previous"}
          nextAriaLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Home;
