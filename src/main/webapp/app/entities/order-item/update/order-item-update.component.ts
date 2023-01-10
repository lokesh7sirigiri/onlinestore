import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { OrderItemFormService, OrderItemFormGroup } from './order-item-form.service';
import { IOrderItem } from '../order-item.model';
import { OrderItemService } from '../service/order-item.service';
import { IProductOrder } from 'app/entities/product-order/product-order.model';
import { ProductOrderService } from 'app/entities/product-order/service/product-order.service';
import { OrderItemStatus } from 'app/entities/enumerations/order-item-status.model';

@Component({
  selector: 'jhi-order-item-update',
  templateUrl: './order-item-update.component.html',
})
export class OrderItemUpdateComponent implements OnInit {
  isSaving = false;
  orderItem: IOrderItem | null = null;
  orderItemStatusValues = Object.keys(OrderItemStatus);

  productOrdersSharedCollection: IProductOrder[] = [];

  editForm: OrderItemFormGroup = this.orderItemFormService.createOrderItemFormGroup();

  constructor(
    protected orderItemService: OrderItemService,
    protected orderItemFormService: OrderItemFormService,
    protected productOrderService: ProductOrderService,
    protected activatedRoute: ActivatedRoute
  ) {}

  compareProductOrder = (o1: IProductOrder | null, o2: IProductOrder | null): boolean =>
    this.productOrderService.compareProductOrder(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ orderItem }) => {
      this.orderItem = orderItem;
      if (orderItem) {
        this.updateForm(orderItem);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const orderItem = this.orderItemFormService.getOrderItem(this.editForm);
    if (orderItem.id !== null) {
      this.subscribeToSaveResponse(this.orderItemService.update(orderItem));
    } else {
      this.subscribeToSaveResponse(this.orderItemService.create(orderItem));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrderItem>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(orderItem: IOrderItem): void {
    this.orderItem = orderItem;
    this.orderItemFormService.resetForm(this.editForm, orderItem);

    this.productOrdersSharedCollection = this.productOrderService.addProductOrderToCollectionIfMissing<IProductOrder>(
      this.productOrdersSharedCollection,
      orderItem.order
    );
  }

  protected loadRelationshipsOptions(): void {
    this.productOrderService
      .query()
      .pipe(map((res: HttpResponse<IProductOrder[]>) => res.body ?? []))
      .pipe(
        map((productOrders: IProductOrder[]) =>
          this.productOrderService.addProductOrderToCollectionIfMissing<IProductOrder>(productOrders, this.orderItem?.order)
        )
      )
      .subscribe((productOrders: IProductOrder[]) => (this.productOrdersSharedCollection = productOrders));
  }
}
