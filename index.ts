import {prisma} from './generated/prisma-client'
import {GraphQLServer} from 'graphql-yoga'
import * as d3 from 'd3';

const resolvers = {
    Query: {
        samples(parent, args, context) {
            return context.prisma.samples()
        },
        genes(parent, args, context) {
            return context.prisma.genes(
                {orderBy: 'gene_ASC'}
            );
        },
        async heatmap(parent, {sample_tissues, genes, height, width}, context) {
            console.log(sample_tissues);

            // get list of samples
            const samples = await context.prisma.samples({where: {gene_in: genes}});
            console.log('samples selected', samples.length);

            // redefine scales
            const z = d3
                .scaleLinear()
                .domain([-3, 3])
                .range([0, 1]);

            const y = d3
                .scaleBand()
                .domain(genes)
                .range([0, height]);

            const x = d3
                .scaleLinear()
                .domain(sample_tissues)
                .range([0, width]);

            // Build the list of heatmap points
            let check = '';
            let idx = 1;
            const [min, max] = sample_tissues;

            const data = samples.reduce((acc, s) => {
                if (check !== s.gene) {
                    check = s.gene;
                    idx = 1;
                } else {
                    idx += 1;
                }

                // Negative are out of range, no need to send them back to the UI.
                if (idx >= min && idx <= max) {
                    const x1 = x(idx);
                    const y1 = y(s.gene);
                    const value = z(s.z_score);
                    const width = x(min + 1);
                    const height = y.bandwidth();

                    acc.push({coord: [x1, y1, value, width, height]});
                }

                return acc
            }, []);

            console.log(data.length);

            return data
        }
    }
};

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {
        prisma
    },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
