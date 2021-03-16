import React from "react";
import { withRouter } from 'react-router-dom';
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, id, size, history, linkUrl, match }) => (
  <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
    className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="sub-title">SHOP NOW</span>
    </div>
  </div>
);
// has access to location, match, and history props
export default withRouter(MenuItem);
