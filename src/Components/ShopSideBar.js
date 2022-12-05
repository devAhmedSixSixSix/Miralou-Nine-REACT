import React from "react";
import Accordion from "react-bootstrap/Accordion";

function ShopSideBar({
  setLoest,
  setHighest,
  setCategory,
  filterdCategorysNames,
}) {
  const getLoest = (e) => {
    setLoest(e.target.value);
  };

  const getHighest = (e) => {
    setHighest(e.target.value);
  };

  const getCategory = (e) => {
    setCategory(e.target.innerHTML);
  };
  return (
    <div>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filter by category</Accordion.Header>
          <Accordion.Body>
            <p onClick={getCategory} className="pointer">
              all
            </p>
            {filterdCategorysNames &&
              filterdCategorysNames.map((item) => (
                <p key={item} onClick={getCategory} className="pointer">
                  {item}
                </p>
              ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Filter by price</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex gap-1">
              <div className="w-100">
                <label>Min</label>
                <input type="text" className="w-100" onChange={getLoest} />
              </div>
              <div className="w-100">
                <label>Max</label>
                <input type="text" className="w-100" onChange={getHighest} />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ShopSideBar;
