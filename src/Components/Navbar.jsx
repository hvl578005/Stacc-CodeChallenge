import React, { useCallback } from "react";

const Navbar = ({ sortData, setSortData, orderBy, setOrderBy }) => {
  const handleClick = () => {
    setSortData(sortData === "asc" ? "desc" : "asc");
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

  return (
    <div className="navbar">
      <div className="navbar-p" onClick={handleClick}>
        {sortData === "asc" ? "Ascending order" : "Descending order"}
      </div>
      <div className="navbar-p">limit</div>
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
            <p
              onClick={() => orderByFunc("sp")}
              style={checkStyle("order_by=sale_price&")}
            >
              Sale price
            </p>
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
    </div>
  );
};

export default Navbar;
