export const typeDefs = /* GraphQL */ `type AggregateSample {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createSample(data: SampleCreateInput!): Sample!
  updateSample(data: SampleUpdateInput!, where: SampleWhereUniqueInput!): Sample
  updateManySamples(data: SampleUpdateManyMutationInput!, where: SampleWhereInput): BatchPayload!
  upsertSample(where: SampleWhereUniqueInput!, create: SampleCreateInput!, update: SampleUpdateInput!): Sample!
  deleteSample(where: SampleWhereUniqueInput!): Sample
  deleteManySamples(where: SampleWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  sample(where: SampleWhereUniqueInput!): Sample
  samples(where: SampleWhereInput, orderBy: SampleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sample]!
  samplesConnection(where: SampleWhereInput, orderBy: SampleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SampleConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Sample {
  id: ID!
  sample_tissue: String!
  z_score: Int!
  gene: String!
}

type SampleConnection {
  pageInfo: PageInfo!
  edges: [SampleEdge]!
  aggregate: AggregateSample!
}

input SampleCreateInput {
  sample_tissue: String!
  z_score: Int!
  gene: String!
}

type SampleEdge {
  node: Sample!
  cursor: String!
}

enum SampleOrderByInput {
  id_ASC
  id_DESC
  sample_tissue_ASC
  sample_tissue_DESC
  z_score_ASC
  z_score_DESC
  gene_ASC
  gene_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SamplePreviousValues {
  id: ID!
  sample_tissue: String!
  z_score: Int!
  gene: String!
}

type SampleSubscriptionPayload {
  mutation: MutationType!
  node: Sample
  updatedFields: [String!]
  previousValues: SamplePreviousValues
}

input SampleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SampleWhereInput
  AND: [SampleSubscriptionWhereInput!]
  OR: [SampleSubscriptionWhereInput!]
  NOT: [SampleSubscriptionWhereInput!]
}

input SampleUpdateInput {
  sample_tissue: String
  z_score: Int
  gene: String
}

input SampleUpdateManyMutationInput {
  sample_tissue: String
  z_score: Int
  gene: String
}

input SampleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  sample_tissue: String
  sample_tissue_not: String
  sample_tissue_in: [String!]
  sample_tissue_not_in: [String!]
  sample_tissue_lt: String
  sample_tissue_lte: String
  sample_tissue_gt: String
  sample_tissue_gte: String
  sample_tissue_contains: String
  sample_tissue_not_contains: String
  sample_tissue_starts_with: String
  sample_tissue_not_starts_with: String
  sample_tissue_ends_with: String
  sample_tissue_not_ends_with: String
  z_score: Int
  z_score_not: Int
  z_score_in: [Int!]
  z_score_not_in: [Int!]
  z_score_lt: Int
  z_score_lte: Int
  z_score_gt: Int
  z_score_gte: Int
  gene: String
  gene_not: String
  gene_in: [String!]
  gene_not_in: [String!]
  gene_lt: String
  gene_lte: String
  gene_gt: String
  gene_gte: String
  gene_contains: String
  gene_not_contains: String
  gene_starts_with: String
  gene_not_starts_with: String
  gene_ends_with: String
  gene_not_ends_with: String
  AND: [SampleWhereInput!]
  OR: [SampleWhereInput!]
  NOT: [SampleWhereInput!]
}

input SampleWhereUniqueInput {
  id: ID
}

type Subscription {
  sample(where: SampleSubscriptionWhereInput): SampleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`