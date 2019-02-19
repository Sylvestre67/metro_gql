import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'

const resolvers = {
  Query: {
    samples(parent, args, context) {
      return context.prisma.samples()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
