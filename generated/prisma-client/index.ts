// Code generated by Prisma (prisma@1.26.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  sample: (where?: SampleWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  sample: (where: SampleWhereUniqueInput) => SamplePromise;
  samples: (args?: {
    where?: SampleWhereInput;
    orderBy?: SampleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Sample>;
  samplesConnection: (args?: {
    where?: SampleWhereInput;
    orderBy?: SampleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => SampleConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSample: (data: SampleCreateInput) => SamplePromise;
  updateSample: (args: {
    data: SampleUpdateInput;
    where: SampleWhereUniqueInput;
  }) => SamplePromise;
  updateManySamples: (args: {
    data: SampleUpdateManyMutationInput;
    where?: SampleWhereInput;
  }) => BatchPayloadPromise;
  upsertSample: (args: {
    where: SampleWhereUniqueInput;
    create: SampleCreateInput;
    update: SampleUpdateInput;
  }) => SamplePromise;
  deleteSample: (where: SampleWhereUniqueInput) => SamplePromise;
  deleteManySamples: (where?: SampleWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  sample: (
    where?: SampleSubscriptionWhereInput
  ) => SampleSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type SampleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "sample_tissue_ASC"
  | "sample_tissue_DESC"
  | "z_score_ASC"
  | "z_score_DESC"
  | "gene_ASC"
  | "gene_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  name: String;
}

export type SampleWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface SampleUpdateInput {
  sample_tissue?: String;
  z_score?: Int;
  gene?: String;
}

export interface SampleWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  sample_tissue?: String;
  sample_tissue_not?: String;
  sample_tissue_in?: String[] | String;
  sample_tissue_not_in?: String[] | String;
  sample_tissue_lt?: String;
  sample_tissue_lte?: String;
  sample_tissue_gt?: String;
  sample_tissue_gte?: String;
  sample_tissue_contains?: String;
  sample_tissue_not_contains?: String;
  sample_tissue_starts_with?: String;
  sample_tissue_not_starts_with?: String;
  sample_tissue_ends_with?: String;
  sample_tissue_not_ends_with?: String;
  z_score?: Int;
  z_score_not?: Int;
  z_score_in?: Int[] | Int;
  z_score_not_in?: Int[] | Int;
  z_score_lt?: Int;
  z_score_lte?: Int;
  z_score_gt?: Int;
  z_score_gte?: Int;
  gene?: String;
  gene_not?: String;
  gene_in?: String[] | String;
  gene_not_in?: String[] | String;
  gene_lt?: String;
  gene_lte?: String;
  gene_gt?: String;
  gene_gte?: String;
  gene_contains?: String;
  gene_not_contains?: String;
  gene_starts_with?: String;
  gene_not_starts_with?: String;
  gene_ends_with?: String;
  gene_not_ends_with?: String;
  AND?: SampleWhereInput[] | SampleWhereInput;
  OR?: SampleWhereInput[] | SampleWhereInput;
  NOT?: SampleWhereInput[] | SampleWhereInput;
}

export interface SampleSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: SampleWhereInput;
  AND?: SampleSubscriptionWhereInput[] | SampleSubscriptionWhereInput;
  OR?: SampleSubscriptionWhereInput[] | SampleSubscriptionWhereInput;
  NOT?: SampleSubscriptionWhereInput[] | SampleSubscriptionWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface SampleCreateInput {
  sample_tissue: String;
  z_score: Int;
  gene: String;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateManyMutationInput {
  name?: String;
}

export interface SampleUpdateManyMutationInput {
  sample_tissue?: String;
  z_score?: Int;
  gene?: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpdateInput {
  name?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface SampleConnection {
  pageInfo: PageInfo;
  edges: SampleEdge[];
}

export interface SampleConnectionPromise
  extends Promise<SampleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SampleEdge>>() => T;
  aggregate: <T = AggregateSamplePromise>() => T;
}

export interface SampleConnectionSubscription
  extends Promise<AsyncIterator<SampleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SampleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSampleSubscription>() => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface SampleSubscriptionPayload {
  mutation: MutationType;
  node: Sample;
  updatedFields: String[];
  previousValues: SamplePreviousValues;
}

export interface SampleSubscriptionPayloadPromise
  extends Promise<SampleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SamplePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SamplePreviousValuesPromise>() => T;
}

export interface SampleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SampleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SampleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SamplePreviousValuesSubscription>() => T;
}

export interface SamplePreviousValues {
  id: ID_Output;
  sample_tissue: String;
  z_score: Int;
  gene: String;
}

export interface SamplePreviousValuesPromise
  extends Promise<SamplePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  sample_tissue: () => Promise<String>;
  z_score: () => Promise<Int>;
  gene: () => Promise<String>;
}

export interface SamplePreviousValuesSubscription
  extends Promise<AsyncIterator<SamplePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  sample_tissue: () => Promise<AsyncIterator<String>>;
  z_score: () => Promise<AsyncIterator<Int>>;
  gene: () => Promise<AsyncIterator<String>>;
}

export interface SampleEdge {
  node: Sample;
  cursor: String;
}

export interface SampleEdgePromise extends Promise<SampleEdge>, Fragmentable {
  node: <T = SamplePromise>() => T;
  cursor: () => Promise<String>;
}

export interface SampleEdgeSubscription
  extends Promise<AsyncIterator<SampleEdge>>,
    Fragmentable {
  node: <T = SampleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Sample {
  id: ID_Output;
  sample_tissue: String;
  z_score: Int;
  gene: String;
}

export interface SamplePromise extends Promise<Sample>, Fragmentable {
  id: () => Promise<ID_Output>;
  sample_tissue: () => Promise<String>;
  z_score: () => Promise<Int>;
  gene: () => Promise<String>;
}

export interface SampleSubscription
  extends Promise<AsyncIterator<Sample>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  sample_tissue: () => Promise<AsyncIterator<String>>;
  z_score: () => Promise<AsyncIterator<Int>>;
  gene: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateSample {
  count: Int;
}

export interface AggregateSamplePromise
  extends Promise<AggregateSample>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSampleSubscription
  extends Promise<AsyncIterator<AggregateSample>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Sample",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
