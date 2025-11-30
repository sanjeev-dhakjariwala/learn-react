import { type FC, type ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header: FC = (): ReactElement => {
  return (
    <>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
