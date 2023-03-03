/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Paginate({
  postPerPage,
  totalPost,
  paginate,
  previousPage,
  nextPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a
              className="page-link text-light bg-dark"
              style={{ cursor: "pointer" }}
              onClick={previousPage}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          {pageNumbers.map((number) => (
            <li className={"page-item"} key={number}>
              <a
                className="page-link"
                style={{ cursor: "pointer" }}
                onClick={() => paginate(number)}
              >
                <span className="active text-dark">{number}</span>
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              className="page-link text-light bg-dark"
              style={{ cursor: "pointer" }}
              onClick={nextPage}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
