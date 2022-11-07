import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import GoodPage from "../components/page/goodPage";
import GoodsListPage from "../components/page/goodsListPage";

import api from "../api";

const Sweets = () => {
  const [goods, setGoods] = useState();
  const { goodId } = useParams();

  useEffect(() => {
    api.goods.fetchAll().then((data) => setGoods(data));
  }, []);

  return (
    <>
      {goodId ? (
        <GoodPage goodId={goodId} api={api} />
      ) : (
        <GoodsListPage api={api} goods={goods} />
      )}
    </>
  );
};

export default Sweets;
