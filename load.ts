import {prisma} from './generated/prisma-client'

const genes = [
    'ALS2',
    'ANG',
    'ANXA11',
    'ATXN2',
    'C21orf2',
    'C9orf72',
    'CCNF',
    'CHCHD10',
    'CHMP2B',
    'DCTN1',
    'ERBB4',
    'FIG4',
    'FUS',
    'GLE1',
    'GRN',
    'HNRNPA1',
    'HNRNPA2B1',
    'MATR3',
    'NEFH',
    'NEK1',
    'OPTN',
    'PFN1',
    'PRPH',
    'SETX',
    'SIGMAR1',
    'SOD1',
    'SPAST',
    'SPG11',
    'SQSTM1',
    'SS18L1',
    'TAF15',
    'TARDBP',
    'TBK1',
    'TRPM7',
    'TUBA4A',
    'UBQLN2',
    'VAPB',
    'VCP',
];

const sample_tissues = [
    'Cerebellum',
    'Cortex Frontal',
    'Cortex Occipital',
    'Liver',
    'Motor Cortex',
    'Motor Cortex Lateral',
    'Motor Cortex Medial',
    'Spinal Cord',
    'Spinal Cord Thoracic',
    'Spinal Cord Lumbar'
];

const thresholds = [5, 16, 25, 30, 12, 50, 80, 90, 10, 65];

async function loadGenes() {
    genes.forEach(async gene => {
        const newGene = await prisma.createGene({
            gene
        });
        console.log(`inserted ${newGene.id} from ${newGene.gene}`)
    })
}

async function unLoadGenes() {
    await prisma.deleteManyGenes({gene_in: genes})
}

async function unLoadSampleTissues() {
    await prisma.deleteManySampleTissues({tissue_in: sample_tissues})
}

async function unLoadSamples() {
    await prisma.deleteManySamples({sample_tissue_in: sample_tissues})
}

async function loadSampleTissues() {
    sample_tissues.forEach(async tissue => {
        const sampleTissue = await prisma.createSampleTissue({
            tissue
        });
        console.log(`inserted ${sampleTissue.id} from ${sampleTissue.tissue}`)
    })
}

async function loadRandomSamples() {
    const samples = [];
    let count = 0;
    for (let i = 0; i < genes.length; i++) {
        const gene = genes[i];
        for (let z = 0; z < sample_tissues.length; z++) {
            const sample_tissue = sample_tissues[z];

            for (let j = 0; j <= thresholds[z]; j++) {
                const zScore = getRandomInt(3);

                const newSample = await prisma.createSample({
                    sample_tissue,
                    z_score: zScore % 2 || zScore === 0 ? zScore : -zScore,
                    gene,
                });
                console.log(`inserted ${newSample.id} from ${newSample.gene}`);
            }
        }
    }
}

// unLoad data
// unLoadSamples().catch(e => console.error(e));
unLoadGenes().catch(e => console.error(e));
// unLoadSampleTissues().catch((e => console.error(e)));

// Load data
// loadRandomSamples().catch(e => console.error(e));
loadGenes().catch(e => console.error(e));
// loadSampleTissues().catch((e => console.error(e)));


// Utils
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
