export interface ProductVariation {
  variation: {
    label: string;
    percentdiscount: number | null;
    price: number | null;
  };
}

export interface ProductImage {
  altText?: string | null;
  mediaDetails?: {
    height?: number | null;
    width?: number | null;
  } | null;
  mediaItemUrl?: string | null;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  featuredImage: {
    node: ProductImage;
  } | null;
  productFields: {
    variations: ProductVariation[];
  };
}
