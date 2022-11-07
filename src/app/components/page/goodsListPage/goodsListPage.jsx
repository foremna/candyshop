import React, { useState } from "react";

import Good from "../../ui/Good";

import _ from "lodash";

const GoodsListPage = ({ goods }) => {
  return (
    <>
      {goods ? (
        <div className="row justify-content-center">
          <div className="cards col-8">
            <div className="row">
              <Good goods={goods} />
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
