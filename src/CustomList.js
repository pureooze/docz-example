import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomList extends Component {
  render() {
    let style = { display: "flex" };

    if (this.props.type === "row") {
      style["flex-direction"] = "row";
    } else {
      style["flex-direction"] = "column";
    }

    return (
      <ul style={style}>
        {this.props.items.map(item => (
          <li style={{ margin: "0px 10px 0px 10px" }} key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
    );
  }
}

CustomList.propTypes = {
  /** The items array must be passed in */
  items: PropTypes.array.isRequired,
  type: PropTypes.string
};

export default CustomList;
