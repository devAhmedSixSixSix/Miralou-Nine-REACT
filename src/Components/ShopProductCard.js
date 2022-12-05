import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

function ShopProductCard({ data }) {
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 6;
  const pagesVisited = pageNumber * productPerPage;

  const displayProducts =
    data &&
    data.slice(pagesVisited, pagesVisited + productPerPage).map((ele) => (
      <Col xs={12} md={6} lg={4} key={ele.id} className="mb-5">
        <div className="text-center m-2">
          <div className="bg-light p-3 rounded">
            <img src={ele.image} alt="test" width={200} height={200} />
          </div>
          <p className="text-muted">{ele.category}</p>
          <h6>
            {ele.title.length > 20 ? ele.title.slice(0, 18) + "..." : ele.title}
          </h6>
          <p className="text-muted">{ele.price}$</p>
          <Link to={`/productpage/${ele.id}`}>
            <Button variant="success" className="w-100">
              Veiw Product
            </Button>
          </Link>
        </div>
      </Col>
    ));

  const pageCount = Math.ceil(data && data.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Row>
        {displayProducts}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          activeClassName={"paginationActive"}
        />
      </Row>
    </div>
  );
}

export default ShopProductCard;
