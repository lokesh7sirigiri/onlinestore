import { IProductOrder } from 'app/entities/product-order/product-order.model';
import { OrderItemStatus } from 'app/entities/enumerations/order-item-status.model';

export interface IOrderItem {
  id: number;
  quantity?: number | null;
  totalPrice?: number | null;
  status?: OrderItemStatus | null;
  order?: Pick<IProductOrder, 'id'> | null;
}

export type NewOrderItem = Omit<IOrderItem, 'id'> & { id: null };
