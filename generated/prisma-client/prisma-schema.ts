export const typeDefs = /* GraphQL */ `type AggregateGene {
  count: Int!
}

type AggregateSample {
  count: Int!
}

type AggregateSampleTissue {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Gene {
  id: ID!
  gene: String!
}

type GeneConnection {
  pageInfo: PageInfo!
  edges: [GeneEdge]!
  aggregate: AggregateGene!
}

input GeneCreateInput {
  gene: String!
}

type GeneEdge {
  node: Gene!
  cursor: String!
}

enum GeneOrderByInput {
  id_ASC
  id_DESC
  gene_ASC
  gene_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GenePreviousValues {
  id: ID!
  gene: String!
}

type GeneSubscriptionPayload {
  mutation: MutationType!
  node: Gene
  updatedFields: [String!]
  previousValues: GenePreviousValues
}

input GeneSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GeneWhereInput
  AND: [GeneSubscriptionWhereInput!]
  OR: [GeneSubscriptionWhereInput!]
  NOT: [GeneSubscriptionWhereInput!]
}

input GeneUpdateInput {
  gene: String
}

input GeneUpdateManyMutationInput {
  gene: String
}

input GeneWhereInput {
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
  AND: [GeneWhereInput!]
  OR: [GeneWhereInput!]
  NOT: [GeneWhereInput!]
}

input GeneWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGene(data: GeneCreateInput!): Gene!
  updateGene(data: GeneUpdateInput!, where: GeneWhereUniqueInput!): Gene
  updateManyGenes(data: GeneUpdateManyMutationInput!, where: GeneWhereInput): BatchPayload!
  upsertGene(where: GeneWhereUniqueInput!, create: GeneCreateInput!, update: GeneUpdateInput!): Gene!
  deleteGene(where: GeneWhereUniqueInput!): Gene
  deleteManyGenes(where: GeneWhereInput): BatchPayload!
  createSample(data: SampleCreateInput!): Sample!
  updateSample(data: SampleUpdateInput!, where: SampleWhereUniqueInput!): Sample
  updateManySamples(data: SampleUpdateManyMutationInput!, where: SampleWhereInput): BatchPayload!
  upsertSample(where: SampleWhereUniqueInput!, create: SampleCreateInput!, update: SampleUpdateInput!): Sample!
  deleteSample(where: SampleWhereUniqueInput!): Sample
  deleteManySamples(where: SampleWhereInput): BatchPayload!
  createSampleTissue(data: SampleTissueCreateInput!): SampleTissue!
  updateSampleTissue(data: SampleTissueUpdateInput!, where: SampleTissueWhereUniqueInput!): SampleTissue
  updateManySampleTissues(data: SampleTissueUpdateManyMutationInput!, where: SampleTissueWhereInput): BatchPayload!
  upsertSampleTissue(where: SampleTissueWhereUniqueInput!, create: SampleTissueCreateInput!, update: SampleTissueUpdateInput!): SampleTissue!
  deleteSampleTissue(where: SampleTissueWhereUniqueInput!): SampleTissue
  deleteManySampleTissues(where: SampleTissueWhereInput): BatchPayload!
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
  gene(where: GeneWhereUniqueInput!): Gene
  genes(where: GeneWhereInput, orderBy: GeneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Gene]!
  genesConnection(where: GeneWhereInput, orderBy: GeneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GeneConnection!
  sample(where: SampleWhereUniqueInput!): Sample
  samples(where: SampleWhereInput, orderBy: SampleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sample]!
  samplesConnection(where: SampleWhereInput, orderBy: SampleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SampleConnection!
  sampleTissue(where: SampleTissueWhereUniqueInput!): SampleTissue
  sampleTissues(where: SampleTissueWhereInput, orderBy: SampleTissueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SampleTissue]!
  sampleTissuesConnection(where: SampleTissueWhereInput, orderBy: SampleTissueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SampleTissueConnection!
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

type SampleTissue {
  id: ID!
  tissue: String!
}

type SampleTissueConnection {
  pageInfo: PageInfo!
  edges: [SampleTissueEdge]!
  aggregate: AggregateSampleTissue!
}

input SampleTissueCreateInput {
  tissue: String!
}

type SampleTissueEdge {
  node: SampleTissue!
  cursor: String!
}

enum SampleTissueOrderByInput {
  id_ASC
  id_DESC
  tissue_ASC
  tissue_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SampleTissuePreviousValues {
  id: ID!
  tissue: String!
}

type SampleTissueSubscriptionPayload {
  mutation: MutationType!
  node: SampleTissue
  updatedFields: [String!]
  previousValues: SampleTissuePreviousValues
}

input SampleTissueSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SampleTissueWhereInput
  AND: [SampleTissueSubscriptionWhereInput!]
  OR: [SampleTissueSubscriptionWhereInput!]
  NOT: [SampleTissueSubscriptionWhereInput!]
}

input SampleTissueUpdateInput {
  tissue: String
}

input SampleTissueUpdateManyMutationInput {
  tissue: String
}

input SampleTissueWhereInput {
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
  tissue: String
  tissue_not: String
  tissue_in: [String!]
  tissue_not_in: [String!]
  tissue_lt: String
  tissue_lte: String
  tissue_gt: String
  tissue_gte: String
  tissue_contains: String
  tissue_not_contains: String
  tissue_starts_with: String
  tissue_not_starts_with: String
  tissue_ends_with: String
  tissue_not_ends_with: String
  AND: [SampleTissueWhereInput!]
  OR: [SampleTissueWhereInput!]
  NOT: [SampleTissueWhereInput!]
}

input SampleTissueWhereUniqueInput {
  id: ID
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
  gene(where: GeneSubscriptionWhereInput): GeneSubscriptionPayload
  sample(where: SampleSubscriptionWhereInput): SampleSubscriptionPayload
  sampleTissue(where: SampleTissueSubscriptionWhereInput): SampleTissueSubscriptionPayload
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