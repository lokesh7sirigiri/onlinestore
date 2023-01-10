import { Gender } from 'app/entities/enumerations/gender.model';

import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 24379,
  firstName: 'Erin',
  lastName: 'White',
  gender: Gender['FEMALE'],
  email: 'Cz@tK):.gTR[u',
  phone: '1-853-206-9931 x486',
  addressLine1: 'Estonia input withdrawal',
  city: 'Amiestad',
  country: 'Guyana',
};

export const sampleWithPartialData: ICustomer = {
  id: 78864,
  firstName: 'Lenna',
  lastName: 'Gleason',
  gender: Gender['FEMALE'],
  email: '8%V_<@WD.K4~',
  phone: '(782) 303-0501 x79537',
  addressLine1: 'program calculating',
  addressLine2: 'Investor clicks-and-mortar',
  city: 'Santa Rosa',
  country: 'Bulgaria',
};

export const sampleWithFullData: ICustomer = {
  id: 11091,
  firstName: 'Karianne',
  lastName: 'Botsford',
  gender: Gender['MALE'],
  email: "x_=8L@$9'L.LM(",
  phone: '1-277-691-3364',
  addressLine1: 'Handcrafted',
  addressLine2: 'Handmade 1080p Analyst',
  city: 'Port Marjolainemouth',
  country: 'Mongolia',
};

export const sampleWithNewData: NewCustomer = {
  firstName: 'Joe',
  lastName: 'Kessler',
  gender: Gender['MALE'],
  email: 'Tm@p<Q,*5.d',
  phone: '673-918-0908 x40832',
  addressLine1: 'lime Music',
  city: 'Redding',
  country: 'Samoa',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
