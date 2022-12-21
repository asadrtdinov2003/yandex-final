import React from "react";
import classnames from "classnames";
import { HashLoader } from "react-spinners";
import styles from "./styles.module.css";

function Loading() {
  return (
    <div className={classnames(styles.loading_wrap)}>
      <HashLoader size={100} color="#36d7b7" loading speedMultiplier={0.5} />
    </div>
  );
}

export default Loading;
