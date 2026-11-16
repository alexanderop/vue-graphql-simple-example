import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { HttpResponse } from "msw";
import type { FragmentType } from "../gql";
import { api } from "./worker";

type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type Refs<T> = T extends { " $fragmentRefs"?: infer R } ? UnionToIntersection<R[keyof R]> : unknown;

/** Resolves every fragment spread, so the type lists all fields the server must send. */
export type Unmasked<T> = T extends ReadonlyArray<infer U>
  ? Array<Unmasked<U>>
  : T extends object
    ? { [K in Exclude<keyof T, " $fragmentRefs" | " $fragmentName">]: Unmasked<T[K]> } & Unmasked<Refs<T>>
    : T;

export function fragmentData<TData>(
  _fragment: TypedDocumentNode<TData, any>,
  data: Unmasked<TData>
) {
  return data as FragmentType<TypedDocumentNode<TData, any>>;
}

export function mockQuery<TData extends Record<string, unknown>>(
  query: TypedDocumentNode<TData, any>,
  data: Unmasked<TData>
) {
  return api.query(query, () => HttpResponse.json({ data: data as TData }));
}
