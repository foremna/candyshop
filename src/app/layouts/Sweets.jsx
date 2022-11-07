import React, { useState, useEffect } from "react";

import GoodsListPage from "../components/page/goodsListPage";

import api from "../api";

const Sweets = () => {
  const [goods, setGoods] = useState();

  useEffect(() => {
    api.goods.fetchAll().then((data) => setGoods(data));
  }, []);

  return <>{goods && <GoodsListPage api={api} goods={goods} />}</>;
};

export default Sweets;
