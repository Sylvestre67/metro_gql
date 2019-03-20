import { prisma } from '../generated/prisma-client';
import * as variants from './variants.json';
import { sample_tissues, genes } from './seed';

async function unLoadGenes() {
	await prisma.deleteManyGenes({ gene_in: genes });
}

async function unLoadSampleTissues() {
	await prisma.deleteManySampleTissues({ tissue_in: sample_tissues });
}

async function unLoadRandomSamples() {
	await prisma.deleteManySamples({ sample_tissue_in: sample_tissues });
}

function unLoadVariants() {
	const { list } = variants;
	const rsids = list.map(v => v.rsid);
	return prisma.deleteManyVariants({ rsid_in: rsids });
}

const unLoadData = async () => {
	console.log('unloading genes');
	await unLoadGenes();
	console.log('unloading tissues');
	await unLoadSampleTissues();
	console.log('unloading variants');
	await unLoadVariants();
	console.log('unloading samples');
	await unLoadRandomSamples();
};

unLoadData();
