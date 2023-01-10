import dayjs from 'dayjs/esm';

import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 91509,
  date: dayjs('2023-01-10T01:42'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2023-01-10T13:38'),
  paymentAmount: 24487,
};

export const sampleWithPartialData: IInvoice = {
  id: 45358,
  date: dayjs('2023-01-10T12:04'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-01-10T05:43'),
  paymentAmount: 13016,
};

export const sampleWithFullData: IInvoice = {
  id: 55368,
  date: dayjs('2023-01-10T08:50'),
  details: 'Tugrik Customer schemas',
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-01-09T19:09'),
  paymentAmount: 37477,
};

export const sampleWithNewData: NewInvoice = {
  date: dayjs('2023-01-10T09:40'),
  status: InvoiceStatus['CANCELLED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-01-09T23:03'),
  paymentAmount: 30708,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
