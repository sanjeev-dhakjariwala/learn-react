import { useEffect, useState, type FC } from "react";
import { useParams } from "react-router-dom";
import { type ProductInfoType } from "../../types/types";
import { API_URL } from "../../utils/constant";
import styles from "./ProductDetails.module.css";

export const ProductDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductInfoType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Product ID is missing");
      setLoading(false);
      return;
    }

    const abortController = new AbortController();

    fetch(`${API_URL}products/${id}`, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data: ProductInfoType) => {
        setProduct(data);
        setError(null);
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [id]);

  if (loading) {
    return (
      <div className={styles.productDetailsContainer}>
        <div className={styles.loading}>Loading product details...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.productDetailsContainer}>
        <div className={styles.error}>
          {error || "Product not found"}
        </div>
      </div>
    );
  }

  const {
    id: productId,
    title,
    price,
    category,
    description,
    image,
    rating,
  } = product;
  // Function to render star rating
  const renderStars = (rate: number) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className={styles.ratingStars}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} className={styles.star}>⭐</span>
        ))}
        {hasHalfStar && <span className={styles.star}>✨</span>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className={styles.starEmpty}>☆</span>
        ))}
        <span className={styles.ratingText}>({rate.toFixed(1)})</span>
        <span className={styles.reviewCount}>{rating.count} reviews</span>
      </div>
    );
  };

  // Format category to be title case
  const formatCategory = (cat: string) => {
    return cat
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.productDetailsContent}>
        {/* Product Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img 
              src={image} 
              alt={title} 
              className={styles.productImage}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/500x500?text=Image+Not+Available";
              }}
            />
          </div>
        </div>

        {/* Product Information Section */}
        <div className={styles.infoSection}>
          <div className={styles.productId}>Product ID: #{productId}</div>
          
          <h1 className={styles.productTitle}>{title}</h1>
          
          <div className={styles.categoryBadge}>
            {formatCategory(category)}
          </div>

          <div className={styles.ratingSection}>
            {renderStars(rating.rate)}
          </div>

          <div className={styles.priceSection}>
            <span className={styles.priceLabel}>Price:</span>
            <span className={styles.price}>Rs. {price.toFixed(2)}</span>
          </div>

          <div className={styles.descriptionSection}>
            <h2 className={styles.descriptionTitle}>Description</h2>
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.addToCartButton}>
              🛒 Add to Cart
            </button>
            <button className={styles.buyNowButton}>
              💳 Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
