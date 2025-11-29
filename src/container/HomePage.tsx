import { useEffect, useState, type FC, type ReactElement } from "react";
import { API_URL } from "../utils/constant";
import { type ProductInfoType } from "../types/types";
import { ProductInfo } from "../components/ProductInfo";
import styles from './Homepage.module.css'

export const HomePage: FC = (): ReactElement => {
  const [data, setData] = useState<ProductInfoType[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`${API_URL}products`, { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.log(err);
        }
      });

    // Cleanup function: cancels the request if component unmounts
    return () => {
      console.log("Unmount!!");
      abortController.abort();
    };
  }, []);

  return (
    <>
      <h2>Home Page</h2>
      <div className={styles.productContainer}>
        {data?.map((item: ProductInfoType) => {
          return (
            <ProductInfo
              key={`${item.id}${item.title}`}
              id={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
            />
          );
        })}
      </div>
    </>
  );
};
