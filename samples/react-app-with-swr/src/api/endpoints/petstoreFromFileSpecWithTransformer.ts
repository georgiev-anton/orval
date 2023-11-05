/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import useSwr from 'swr';
import type { Key, SWRConfiguration } from 'swr';
import type {
  CreatePetsBody,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '../model';
import { customInstance } from '../mutator/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const listPets = (params?: ListPetsParams, version = 1) => {
  return customInstance<Pets>({
    url: `/v${version}/pets`,
    method: 'get',
    params,
  });
};

export const getListPetsKey = (params?: ListPetsParams, version = 1) =>
  [`/v${version}/pets`, ...(params ? [params] : [])] as const;

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = Error;

/**
 * @summary List all pets
 */
export const useListPets = <TError = Error>(
  params?: ListPetsParams,
  version = 1,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof listPets>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!version;
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getListPetsKey(params, version) : null));
  const swrFn = () => listPets(params, version);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Create a pet
 */
export const createPets = (createPetsBody: CreatePetsBody, version = 1) => {
  return customInstance<Pet>({
    url: `/v${version}/pets`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
  });
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = (petId: string, version = 1) => {
  return customInstance<Pet>({
    url: `/v${version}/pets/${petId}`,
    method: 'get',
  });
};

export const getShowPetByIdKey = (petId: string, version = 1) =>
  [`/v${version}/pets/${petId}`] as const;

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

/**
 * @summary Info for a specific pet
 */
export const useShowPetById = <TError = Error>(
  petId: string,
  version = 1,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof showPetById>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!(version && petId);
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getShowPetByIdKey(petId, version) : null));
  const swrFn = () => showPetById(petId, version);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  );

  return {
    swrKey,
    ...query,
  };
};
