import { IOrderItem } from 'app/entities/order-item/order-item.model';
import { IProductCategory } from 'app/entities/product-category/product-category.model';
import { Size } from 'app/entities/enumerations/size.model';

export interface IProduct {
  id: number;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  length?: Size | null;
  image?: string | null;
  imageContentType?: string | null;
  orderItem?: Pick<IOrderItem, 'id'> | null;
  productCategory?: Pick<IProductCategory, 'id'> | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
