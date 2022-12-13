import React from "react";

import classes from "./Comment.module.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

const Comment = ({ img, alt, value, text, date }) => {
  return (
    <div className={classes.abooutUsSingleBox}>
      <div className={classes.commentHeader}>
        <div className={classes.commentIcon}>
          <Avatar alt={alt} src={img} />
        </div>
        <div className={classes.commentRating}>
          <Rating
            name="read-only"
            value={value}
            precision={0.5}
            readOnly
            size="small"
          />
        </div>
      </div>
      <div className={classes.commentText}>{text}</div>
      <div className={classes.commentSource}>
        <div className={classes.socialSource}>
          {" "}
          <TwitterIcon color="primary" />
        </div>
        <div className={classes.socialDate}>
          <em>{date}</em>
        </div>
      </div>
    </div>
  );
};

export default Comment;
