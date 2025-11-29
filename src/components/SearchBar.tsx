import { useState, type FC, type FormEvent } from "react";
import { type ReactElement } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

// This component receives a memoized callback (useCallback)
// Without useCallback, this component would re-render unnecessarily
// because a new function reference would be created on every parent render
export const SearchBar: FC<SearchBarProps> = ({ onSearch }): ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value); // Call the memoized callback
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search products by name or category..."
        value={inputValue}
        onChange={handleChange}
        className={styles.searchInput}
      />
    </form>
  );
};

