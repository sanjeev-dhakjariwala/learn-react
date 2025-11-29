import { type FC } from "react";
import { type ProductInfoProps } from "../types/types";
import styles from "./ProductInfo.module.css";

export const ProductInfo: FC<ProductInfoProps> = ({
  title,
  category,
  price,
}) => {
  return (
    <>
      <div>
        <div className="titleRow">
          <span>
            <strong>{title}</strong>
          </span>
          <span>{` ${category}`}</span>
        </div>
        <div>
          <span>{`Rs. ${price}`}</span>
        </div>
      </div>
    </>
  );
};
