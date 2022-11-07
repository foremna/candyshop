import React, { useState } from "react";

import Good from "../../ui/Good";

import _ from "lodash";

const GoodsListPage = ({ goods }) => {
  const [filter, setFilter] = useState();
  const [search, setSearch] = useState("");
  const [sortByPrice, setSortByPrice] = useState({
    iter: "price",
    order: "asc",
  });

  const handleChange = ({ target }) => {
    setSearch(target.value);
    setFilter("");
  };

  const handleSortByPrice = () => {
    setSortByPrice({
      ...sortByPrice,
      order: sortByPrice.order === "asc" ? "desc" : "asc",
    });
  };

  const filteredGoods = filter
    ? goods.filter((good) => good.category.name.toLowerCase() === filter)
    : goods;

  const foundedGoods = filteredGoods
    ? filteredGoods.filter((good) => good.name.toLowerCase().includes(search))
    : goods;

  const sortedGoods = _.orderBy(
    foundedGoods,
    [sortByPrice.iter],
    [sortByPrice.order]
  );

  return (
    <>
      {goods ? (
        <div className="row justify-content-center">
          <div className="cards col-8">
            <div className="input-group flex-nowrap mb-2">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
                value={search}
              />
              <button className="btn btn-secondary" onClick={handleSortByPrice}>
                {sortByPrice.order === "asc" ? (
                  <i className="bi bi-sort-down-alt"></i>
                ) : (
                  <i className="bi bi-sort-up"></i>
                )}
              </button>
            </div>
            <div className="row">
              <Good goods={sortedGoods} />
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default GoodsListPage;
