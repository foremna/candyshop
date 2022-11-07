import React, { useState, useEffect } from "react";

import { RadioFields } from "../../common/form";

import Good from "../../ui/Good";
import Loading from "../../ui/Loading";

import _ from "lodash";

const GoodsListPage = ({ api, goods }) => {
  const [category, setCategories] = useState(false);
  const [filter, setFilter] = useState();
  const [search, setSearch] = useState("");
  const [sortByPrice, setSortByPrice] = useState({
    iter: "price",
    order: "asc",
  });

  useEffect(() => {
    api.tastes.fetchAll().then((data) => setCategories(data));
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
    setFilter("");
  };

  const handleCategories = ({ target }) => {
    setSearch("");
    setFilter(target.value);
  };

  const handleSortByPrice = () => {
    setSortByPrice({
      ...sortByPrice,
      order: sortByPrice.order === "asc" ? "desc" : "asc",
    });
  };

  const clearFiltered = () => {
    setFilter();
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
            {category ? (
              <div className="inputs-wrapper inputs-wrapper--row">
                <RadioFields
                  options={category}
                  name="tastes"
                  value={filter}
                  onChange={handleCategories}
                />
                <button className="btn btn-link btn-sm" onClick={clearFiltered}>
                  Show all
                </button>
              </div>
            ) : null}
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
        <Loading />
      )}
    </>
  );
};

export default GoodsListPage;
