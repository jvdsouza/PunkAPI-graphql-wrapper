export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type Amount = {
   __typename?: 'Amount',
  value?: Maybe<Scalars['Float']>,
  unit?: Maybe<Scalars['String']>,
};

export type Beer = {
   __typename?: 'Beer',
  id: Scalars['ID'],
  name: Scalars['String'],
  tagline?: Maybe<Scalars['String']>,
  first_brewed?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image_url?: Maybe<Scalars['String']>,
  abv?: Maybe<Scalars['Float']>,
  ibu?: Maybe<Scalars['Float']>,
  target_fg?: Maybe<Scalars['Float']>,
  target_og?: Maybe<Scalars['Float']>,
  ebc?: Maybe<Scalars['Float']>,
  srm?: Maybe<Scalars['Float']>,
  ph?: Maybe<Scalars['Float']>,
  attenuation_level?: Maybe<Scalars['Float']>,
  volume?: Maybe<Amount>,
  boil_volume?: Maybe<Amount>,
  method?: Maybe<Method>,
  ingredients?: Maybe<Ingredients>,
  food_pairing?: Maybe<Scalars['String']>,
  brewer_tips?: Maybe<Scalars['String']>,
};

export type Fermentation = {
   __typename?: 'Fermentation',
  temp?: Maybe<Amount>,
};

export type Hops = {
   __typename?: 'Hops',
  name?: Maybe<Scalars['String']>,
  amount?: Maybe<Amount>,
  add?: Maybe<Scalars['String']>,
  attribute?: Maybe<Scalars['String']>,
};

export type Ingredients = {
   __typename?: 'Ingredients',
  malt?: Maybe<Array<Maybe<Malt>>>,
  hops?: Maybe<Array<Maybe<Hops>>>,
  yeast?: Maybe<Scalars['String']>,
};

export type Malt = {
   __typename?: 'Malt',
  name?: Maybe<Scalars['String']>,
  amount?: Maybe<Amount>,
};

export type Mash_Temp = {
   __typename?: 'Mash_temp',
  temp?: Maybe<Amount>,
  duration?: Maybe<Scalars['String']>,
};

export type Method = {
   __typename?: 'Method',
  mash_temp?: Maybe<Array<Maybe<Mash_Temp>>>,
  fermentation?: Maybe<Fermentation>,
  twist?: Maybe<Scalars['Boolean']>,
};

export type Query = {
   __typename?: 'Query',
  getBeerByID?: Maybe<Beer>,
};


export type QueryGetBeerByIdArgs = {
  id: Scalars['ID']
};

import { ObjectID } from 'mongodb';