import React, { useState } from "react";
import Collections from "../Api/Collections";

const ArtCardCollection = ({ asset }) => {
  return (
    <div className="wrapper--variable">
      <table className="artcard">
        <tbody>
          <th></th>
          <tr>
            <td>{asset.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ArtCardCollection;
