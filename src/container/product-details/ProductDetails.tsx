import { type FC } from "react";
import { type ProductInfoType } from "../../types/types";
import styles from "./ProductDetails.module.css";

export const ProductDetails: FC<ProductInfoType> = ({
  id,
  title,
  price,
  category,
  description,
  image,
  rating,
}) => {
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
          <div className={styles.productId}>Product ID: #{id}</div>
          
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
