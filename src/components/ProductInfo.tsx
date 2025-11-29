import { type FC } from "react";
import { type ProductInfoProps } from "../types/types";
import styles from "./ProductInfo.module.css";

export const ProductInfo: FC<ProductInfoProps> = ({
  title,
  category,
  price,
  image,
}) => {
  console.log(image);
  return (
    <>
      <div className={styles.productInfoDiv}>
        <div className="titleRow">
          <img className={styles.productImage} src={image} />
          <div>
            <span>
              <strong>{title}</strong>
            </span>
          </div>

          <span>{` ${category}`}</span>
        </div>
        <div>
          <span>{`Rs. ${price}`}</span>
        </div>
      </div>
    </>
  );
};
