import {prisma} from './generated/prisma-client';
import {GraphQLServer} from 'graphql-yoga';
import * as d3 from 'd3';

const resolvers = {
    Query: {
        samples(parent, args, context) {
            return context.prisma.samples()
        },
        genes(parent, args, context) {

            return context.prisma.genes(
                {
                    orderBy: 'gene_ASC',

                }
            );
        },
        async heatmap(parent, {selected_tissues, selected_genes, height, width}, context) {

            if (!selected_genes) {
                // get list of selected_genes
                selected_genes = await context.prisma.genes({orderBy: 'gene_ASC'});
                selected_genes = selected_genes.map(g => g.gene);
            }

            // get list of samples
            const samples = await context.prisma.samples({where: {gene_in: selected_genes}});


            if (!selected_tissues) {
                // setup the default scale of x-axis (tissues)
                selected_tissues = [0, samples.length / selected_genes.length]
            }

            console.log('selected_genes', selected_genes);
            console.log('samples selected', samples.length);
            console.log('tissues', selected_tissues);

            // redefine scales
            const z_scale = d3
                .scaleLinear()
                .domain([-3, 3])
                .range([0, 1]);

            const y_scale = d3
                .scaleBand()
                .domain(selected_genes)
                .range([0, height]);

            const x_scale = d3
                .scaleLinear()
                .domain(selected_tissues)
                .range([0, width]);

            // Build the list of heatmap points
            let tissues = {};
            let gene_check = '';
            let gene_switched = false;
            let idx = 1;
            const [min, max] = selected_tissues;

            const points = samples.reduce((acc, s) => {
                // Track gene change
                if (gene_check !== s.gene) {
                    gene_check = s.gene;
                    idx = 1;
                } else {
                    idx += 1;
                }

                if (!tissues[gene_check]) {
                    tissues[gene_check] = {
                        [s.sample_tissue]: 1
                    }
                } else {
                    if (!tissues[gene_check][s.sample_tissue]) {
                        tissues[gene_check][s.sample_tissue] = 1
                    } else {
                        tissues[gene_check][s.sample_tissue] += 1
                    }
                }

                // Negative are out of range, no need to send them back to the UI.
                if (idx >= min && idx <= max) {
                    const x = x_scale(idx);
                    const y = y_scale(s.gene);
                    const z = z_scale(s.z_score);
                    const w = x_scale(min + 1);
                    const h = y_scale.bandwidth();

                    acc.push({x, y, z, w, h});
                }

                return acc
            }, []);

            // Reformat tissues to an array of Tissue object.
            const ref = Object.values(tissues)[0];
            tissues = Object.keys(ref).map(t => {
                return {
                    tissue: t,
                    sample_count: ref[t]
                }
            });

            return {points, genes: selected_genes, tissues}
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
