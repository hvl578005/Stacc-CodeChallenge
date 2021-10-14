import React, { useCallback } from "react";

const Navbar = ({
  sortData,
  setSortData,
  orderBy,
  setOrderBy,
  limit,
  setLimit,
  collection,
  setCollection,
}) => {
  const handleClick = () => {
    setSortData(sortData === "asc" ? "desc" : "asc");
    setOrderBy("order_by=sale_date&");
    setLimit("50");
  };
  const orderByFunc = useCallback((saleOrder) => {
    switch (saleOrder) {
      case "sd":
        setOrderBy("order_by=sale_date&");
        break;
      case "sc":
        setOrderBy("order_by=sale_count&");
        break;
      case "sp":
        setOrderBy("order_by=sale_price&");
        break;
      case "none":
        setOrderBy("");
        break;
      default:
        setOrderBy("");
        break;
    }
  }, []);

  console.log(sortData);

  const checkStyle = (order) => {
    if (order === orderBy) {
      return { color: "#444444" };
    }
  };

  const checkStyles = (num) => {
    if (num === limit) {
      return { color: "#444444" };
    }
  };

  const limitFunc = useCallback((limit) => {
    switch (limit) {
      case "20":
        setLimit("20");
        break;
      case "30":
        setLimit("30");
        break;
      case "40":
        setLimit("40");
        break;
      case "50":
        setLimit("50");
        break;
      default:
        setLimit("50");
        break;
    }
  }, []);

  const clickCollections = useCallback((collection) => {
    setCollection(true);
    console.log("hello");
    console.log(collection);
  }, []);

  const clickCollectionsFalse = useCallback((collection) => {
    setCollection(false);
    console.log("hello");
    console.log(collection);
  }, []);

  if (collection === false) {
    return (
      <div className="navbar">
        <div className="navbar-p" onClick={handleClick}>
          {sortData === "asc" ? "Ascending order" : "Descending order"}
        </div>

        <ul>
          <li className="dropdown">
            <a href="javascript:void(0)" className="navbar-p">
              limit
            </a>
            <div className="dropdown-content">
              <p onClick={() => limitFunc("20")} style={checkStyles("20")}>
                20
              </p>
              <p onClick={() => limitFunc("30")} style={checkStyles("30")}>
                30
              </p>
              <p onClick={() => limitFunc("40")} style={checkStyles("40")}>
                40
              </p>
              <p onClick={() => limitFunc("50")} style={checkStyles("50")}>
                50
              </p>
            </div>
          </li>
        </ul>

        <ul>
          <li className="dropdown">
            <a href="javascript:void(0)" className="navbar-p">
              order by
            </a>
            <div className="dropdown-content">
              <p
                onClick={() => orderByFunc("sd")}
                style={checkStyle("order_by=sale_date&")}
              >
                Sale date
              </p>
              {sortData === "asc" && (
                <div>
                  <p
                    onClick={() => orderByFunc("sp")}
                    style={checkStyle("order_by=sale_price&")}
                  >
                    Sale price
                  </p>
                </div>
              )}
              <p
                onClick={() => orderByFunc("sc")}
                style={checkStyle("order_by=sale_count&")}
              >
                Sale Count
              </p>
              <p onClick={() => orderByFunc("none")} style={checkStyle("")}>
                none
              </p>
            </div>
          </li>
        </ul>
        <div
          className="navbar-p"
          onClick={() => clickCollections({ collection })}
        >
          Collections
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div
          className="navbar-p"
          onClick={() => clickCollectionsFalse({ collection })}
        >
          Back to NFT's
        </div>
        
      </div>
    );
  }
};

export default Navbar;
