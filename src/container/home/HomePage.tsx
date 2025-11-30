import { useEffect, useState, useCallback, type FC, type ReactElement } from "react";
import { API_URL } from "../../utils/constant";
import { type ProductInfoType } from "../../types/types";
import { ProductInfo } from "../../components/ProductInfo";
import { SearchBar } from "../../components/SearchBar";
import styles from './Homepage.module.css'

export const HomePage: FC = (): ReactElement => {
  const [data, setData] = useState<ProductInfoType[]>([]);
  const [filteredData, setFilteredData] = useState<ProductInfoType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // useCallback: Memoizes the fetch function so it doesn't change on every render
  // This is useful when passing it as a dependency to useEffect or to child components
  const fetchProducts = useCallback(() => {
    const abortController = new AbortController();

    fetch(`${API_URL}products`, { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => {
        console.log("Products fetched:", res);
        setData(res);
        setFilteredData(res);
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Error fetching products:", err);
        }
      });

    return abortController;
  }, []); // Empty deps: function never changes

  // useCallback: Memoizes the filter function
  // This prevents creating a new function on every render
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [data]); // Depends on 'data' - function updates when data changes

  // useCallback: Memoized refresh handler
  const handleRefresh = useCallback(() => {
    console.log("Refreshing products...");
    fetchProducts();
  }, [fetchProducts]); // Depends on fetchProducts (which is memoized, so stable)

  useEffect(() => {
    const abortController = fetchProducts();

    // Cleanup function: cancels the request if component unmounts
    return () => {
      console.log("Unmount!!");
      abortController.abort();
    };
  }, [fetchProducts]); // fetchProducts is memoized, so this effect only runs once

  // Update filtered data when search term or data changes
  useEffect(() => {
    handleSearch(searchTerm);
  }, [data, searchTerm, handleSearch]);

  return (
    <>
      <h2>Home Page</h2>
      <div className={styles.controls}>
        <SearchBar onSearch={handleSearch} />
        <button onClick={handleRefresh} className={styles.refreshButton}>
          🔄 Refresh
        </button>
      </div>
      <div className={styles.productContainer}>
        {filteredData.length > 0 ? (
          filteredData.map((item: ProductInfoType) => {
            return (
              <ProductInfo
                key={`${item.id}${item.title}`}
                id={item.id}
                title={item.title}
                price={item.price}
                category={item.category}
                image={item.image}
              />
            );
          })
        ) : (
          <p>No products found. Try a different search term.</p>
        )}
      </div>
    </>
  );
};
