export const openApiSchema = {
    openapi: '3.0.0',
    info: {
        title: 'LavaRND API - True Lava Randomness',
        version: '1.0.0',
        description: 'API for true randomness based on live images of our lava lamps.',
    },
    servers: [
        {
            url: 'https://lavarnd.up.railway.app/',
            description: 'Production server - Payment required',
        },
        {
            url: 'https://lavarnd-test.up.railway.app/',
            description: 'Test server, based upon single non updating image, free to use - For testing and development purposes',
        }
    ],
    paths: {
        '/lava-sha256': {
            get: {
                summary: '$0.001 - Generate SHA256 hash from random pixels',
                description: '$0.001 - A SHA256 string using 512 random pixels of our lava lamps.',
                operationId: 'getLavaSha256',
                tags: ['Lava Lamps'],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        sha256: {
                                            type: 'string',
                                            description: 'The SHA256 hash created by sampling 512 random pixels of our lava lamps.',
                                            example: 'a1b2c3d4e5f6...',
                                        },
                                    },
                                    required: ['sha256'],
                                },
                            },
                        },
                    },
                    402: {
                        description: 'Payment required',
                    },
                },
            },
        },
        '/lava-random-int': {
            get: {
                summary: '$0.001 - Generate random integer in range',
                description: '$0.001 - Generate a random integer within a specified range using 256 random pixels.',
                operationId: 'getLavaRandomInt',
                tags: ['Lava Lamps'],
                parameters: [
                    {
                        name: 'min',
                        in: 'query',
                        schema: { type: 'integer', default: 0 },
                        description: 'Minimum value (inclusive)',
                    },
                    {
                        name: 'max',
                        in: 'query',
                        schema: { type: 'integer', default: 9007199254740991 },
                        description: 'Maximum value (inclusive)',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        value: { type: 'integer' },
                                        min: { type: 'integer' },
                                        max: { type: 'integer' },
                                    },
                                    required: ['value', 'min', 'max'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-bytes': {
            get: {
                summary: '$0.001 - Generate random bytes',
                description: '$0.001 - Generate N random bytes using 512 random pixels.',
                operationId: 'getLavaRandomBytes',
                tags: ['Lava Lamps'],
                parameters: [
                    {
                        name: 'count',
                        in: 'query',
                        schema: { type: 'integer', default: 32, minimum: 1, maximum: 1024 },
                        description: 'Number of bytes to generate',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        bytes: { type: 'string', description: 'Hex-encoded random bytes' },
                                    },
                                    required: ['bytes'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-float': {
            get: {
                summary: '$0.001 - Generate random float',
                description: '$0.001 - Generate a random float using 256 random pixels.',
                operationId: 'getLavaRandomFloat',
                tags: ['Lava Lamps'],
                parameters: [
                    {
                        name: 'min',
                        in: 'query',
                        schema: { type: 'number', default: 0 },
                        description: 'Minimum value (inclusive)',
                    },
                    {
                        name: 'max',
                        in: 'query',
                        schema: { type: 'number', default: 1 },
                        description: 'Maximum value (exclusive)',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        value: { type: 'number' },
                                        min: { type: 'number' },
                                        max: { type: 'number' },
                                    },
                                    required: ['value', 'min', 'max'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-bool': {
            get: {
                summary: '$0.001 - Generate random boolean',
                description: '$0.001 - Generate a random boolean (true/false) using 128 random pixels.',
                operationId: 'getLavaRandomBool',
                tags: ['Lava Lamps'],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        value: { type: 'boolean' },
                                    },
                                    required: ['value'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-uuid': {
            get: {
                summary: '$0.001 - Generate UUID v4',
                description: '$0.001 - Generate a UUID v4 using 512 random pixels.',
                operationId: 'getLavaUuid',
                tags: ['Lava Lamps'],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        uuid: { type: 'string', format: 'uuid' },
                                    },
                                    required: ['uuid'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-string': {
            get: {
                summary: '$0.001 - Generate random string',
                description: '$0.001 - Generate a random string using 256 random pixels.',
                operationId: 'getLavaRandomString',
                tags: ['Lava Lamps'],
                parameters: [
                    {
                        name: 'length',
                        in: 'query',
                        schema: { type: 'integer', default: 16, minimum: 1, maximum: 1024 },
                        description: 'Length of the string',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        value: { type: 'string' },
                                        length: { type: 'integer' },
                                    },
                                    required: ['value', 'length'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-sha512': {
            get: {
                summary: '$0.001 - Generate SHA512 hash from random pixels',
                description: '$0.001 - A SHA512 string using 512 random pixels of our lava lamps.',
                operationId: 'getLavaSha512',
                tags: ['Lava Lamps'],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        sha512: {
                                            type: 'string',
                                            description: 'The SHA512 hash created by sampling 512 random pixels of our lava lamps.',
                                        },
                                    },
                                    required: ['sha512'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-sha3-256': {
            get: {
                summary: '$0.001 - Generate SHA3-256 hash from random pixels',
                description: '$0.001 - A SHA3-256 string using 512 random pixels of our lava lamps.',
                operationId: 'getLavaSha3_256',
                tags: ['Lava Lamps'],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        sha3_256: {
                                            type: 'string',
                                            description: 'The SHA3-256 hash created by sampling 512 random pixels of our lava lamps.',
                                        },
                                    },
                                    required: ['sha3_256'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-seed': {
            get: {
                summary: '$0.001 - Generate random seed',
                description: '$0.001 - Generate a random seed value using 512 random pixels.',
                operationId: 'getLavaSeed',
                tags: ['Lava Lamps'],
                parameters: [
                    {
                        name: 'length',
                        in: 'query',
                        schema: { type: 'integer', default: 32, minimum: 1, maximum: 256 },
                        description: 'Length of seed in bytes',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        seed: { type: 'string', description: 'Hex-encoded random seed' },
                                    },
                                    required: ['seed'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-entropy': {
            get: {
                summary: '$0.001 - Calculate entropy score',
                description: '$0.001 - Calculate Shannon entropy of 1024 randomly sampled pixels.',
                operationId: 'getLavaEntropy',
                tags: ['Lava Lamps'],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        entropy: { type: 'number', description: 'Shannon entropy in bits per byte (0-8)' },
                                        bits: { type: 'number', description: 'Total entropy in bits' },
                                    },
                                    required: ['entropy', 'bits'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-permutation': {
            get: {
                summary: '$0.001 - Generate random permutation',
                description: '$0.001 - Generate a random permutation of indices using 256 random pixels.',
                operationId: 'getLavaRandomPermutation',
                tags: ['Lava Lamps'],
                parameters: [
                    {
                        name: 'size',
                        in: 'query',
                        schema: { type: 'integer', default: 10, minimum: 1, maximum: 1024 },
                        description: 'Number of elements in permutation',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        size: { type: 'integer' },
                                        values: { type: 'array', items: { type: 'integer' } },
                                    },
                                    required: ['size', 'values'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-matrix': {
            get: {
                summary: '$0.001 - Generate random matrix',
                description: '$0.001 - Generate an n x m matrix of random floats using 512 random pixels.',
                operationId: 'getLavaRandomMatrix',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'rows', in: 'query', schema: { type: 'integer', default: 3, minimum: 1, maximum: 64 }, description: 'Number of rows' },
                    { name: 'cols', in: 'query', schema: { type: 'integer', default: 3, minimum: 1, maximum: 64 }, description: 'Number of columns' },
                    { name: 'min', in: 'query', schema: { type: 'number', default: 0 }, description: 'Minimum value (inclusive)' },
                    { name: 'max', in: 'query', schema: { type: 'number', default: 1 }, description: 'Maximum value (exclusive)' },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        rows: { type: 'integer' },
                                        cols: { type: 'integer' },
                                        min: { type: 'number' },
                                        max: { type: 'number' },
                                        values: {
                                            type: 'array',
                                            items: { type: 'array', items: { type: 'number' } },
                                        },
                                    },
                                    required: ['rows', 'cols', 'min', 'max', 'values'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-bits': {
            get: {
                summary: '$0.001 - Generate random bitstream',
                description: '$0.001 - Generate a random bitstring using 512 random pixels.',
                operationId: 'getLavaRandomBits',
                tags: ['Lava Lamps'],
                parameters: [
                    {
                        name: 'length',
                        in: 'query',
                        schema: { type: 'integer', default: 1024, minimum: 1, maximum: 8192 },
                        description: 'Length of bitstring to return',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        bits: { type: 'string' },
                                        length: { type: 'integer' },
                                    },
                                    required: ['bits', 'length'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-password': {
            get: {
                summary: '$0.001 - Generate random password',
                description: '$0.001 - Generate a high-entropy password using 256 random pixels.',
                operationId: 'getLavaPassword',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'length', in: 'query', schema: { type: 'integer', default: 16, minimum: 1, maximum: 1024 } },
                    { name: 'includeLower', in: 'query', schema: { type: 'boolean', default: true } },
                    { name: 'includeUpper', in: 'query', schema: { type: 'boolean', default: true } },
                    { name: 'includeNumbers', in: 'query', schema: { type: 'boolean', default: true } },
                    { name: 'includeSymbols', in: 'query', schema: { type: 'boolean', default: true } },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        password: { type: 'string' },
                                        length: { type: 'integer' },
                                        charset: { type: 'string' },
                                    },
                                    required: ['password', 'length', 'charset'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-prime-candidate': {
            get: {
                summary: '$0.001 - Generate random prime candidate',
                description: '$0.001 - Generate a high-entropy odd number for primality testing using 512 random pixels.',
                operationId: 'getLavaPrimeCandidate',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'bitLength', in: 'query', schema: { type: 'integer', default: 256, minimum: 32, maximum: 2048 } },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        candidate: { type: 'string', description: 'Hex-encoded odd number' },
                                        bitLength: { type: 'integer' },
                                    },
                                    required: ['candidate', 'bitLength'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-noise-texture': {
            get: {
                summary: '$0.001 - Generate noise texture',
                description: '$0.001 - Generate a small RGBA noise texture using sampled pixels.',
                operationId: 'getLavaNoiseTexture',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'width', in: 'query', schema: { type: 'integer', default: 32, minimum: 1, maximum: 256 } },
                    { name: 'height', in: 'query', schema: { type: 'integer', default: 32, minimum: 1, maximum: 256 } },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        width: { type: 'integer' },
                                        height: { type: 'integer' },
                                        encoding: { type: 'string' },
                                        format: { type: 'string' },
                                        data: { type: 'string', description: 'Base64 encoded RGBA data' },
                                    },
                                    required: ['width', 'height', 'encoding', 'format', 'data'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-walk': {
            get: {
                summary: '$0.001 - Generate random walk seed',
                description: '$0.001 - Generate a sequence of directional steps using 128 random pixels.',
                operationId: 'getLavaRandomWalk',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'length', in: 'query', schema: { type: 'integer', default: 100, minimum: 1, maximum: 5000 } },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        steps: { type: 'array', items: { type: 'string', enum: ['N', 'S', 'E', 'W'] } },
                                    },
                                    required: ['steps'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-delay': {
            get: {
                summary: '$0.001 - Generate random delay/jitter',
                description: '$0.001 - Generate a delay value in milliseconds using 128 random pixels.',
                operationId: 'getLavaRandomDelay',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'min', in: 'query', schema: { type: 'integer', default: 0, minimum: 0 }, description: 'Minimum delay (ms)' },
                    { name: 'max', in: 'query', schema: { type: 'integer', default: 1000, minimum: 1 }, description: 'Maximum delay (ms)' },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        delayMs: { type: 'integer' },
                                        min: { type: 'integer' },
                                        max: { type: 'integer' },
                                    },
                                    required: ['delayMs', 'min', 'max'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-color-palette': {
            get: {
                summary: '$0.001 - Generate color palette',
                description: '$0.001 - Generate a palette of random colors using 256 random pixels.',
                operationId: 'getLavaColorPalette',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'count', in: 'query', schema: { type: 'integer', default: 5, minimum: 1, maximum: 32 } },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        colors: { type: 'array', items: { type: 'string' } },
                                    },
                                    required: ['colors'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-bloom-filter': {
            get: {
                summary: '$0.001 - Generate bloom filter parameters',
                description: '$0.001 - Generate random bloom filter bit array and hash salts using 512 random pixels.',
                operationId: 'getLavaBloomFilter',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'size', in: 'query', schema: { type: 'integer', default: 256, minimum: 8, maximum: 4096 }, description: 'Size in bits' },
                    { name: 'numHashes', in: 'query', schema: { type: 'integer', default: 3, minimum: 1, maximum: 16 }, description: 'Number of hash functions' },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        size: { type: 'integer' },
                                        numHashes: { type: 'integer' },
                                        bitArray: { type: 'string', description: 'Hex-encoded bit array' },
                                        hashSalts: { type: 'array', items: { type: 'integer' } },
                                    },
                                    required: ['size', 'numHashes', 'bitArray', 'hashSalts'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-custom-permutation': {
            get: {
                summary: '$0.001 - Shuffle custom item set',
                description: '$0.001 - Shuffle an arbitrary comma-separated list using 256 random pixels.',
                operationId: 'getLavaCustomPermutation',
                tags: ['Lava Lamps'],
                parameters: [
                    {
                        name: 'items',
                        in: 'query',
                        required: true,
                        schema: { type: 'string' },
                        description: 'Comma-separated list of items to shuffle',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        original: { type: 'array', items: { type: 'string' } },
                                        shuffled: { type: 'array', items: { type: 'string' } },
                                    },
                                    required: ['original', 'shuffled'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-random-graph': {
            get: {
                summary: '$0.001 - Generate random graph',
                description: '$0.001 - Generate adjacency data using 512 random pixels.',
                operationId: 'getLavaRandomGraph',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'nodes', in: 'query', schema: { type: 'integer', default: 5, minimum: 1, maximum: 64 } },
                    { name: 'density', in: 'query', schema: { type: 'number', default: 0.3, minimum: 0, maximum: 1 } },
                    { name: 'directed', in: 'query', schema: { type: 'boolean', default: false } },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        nodes: { type: 'integer' },
                                        directed: { type: 'boolean' },
                                        density: { type: 'number' },
                                        adjacencyMatrix: {
                                            type: 'array',
                                            items: { type: 'array', items: { type: 'integer' } },
                                        },
                                        edges: {
                                            type: 'array',
                                            items: {
                                                type: 'object',
                                                properties: {
                                                    source: { type: 'integer' },
                                                    target: { type: 'integer' },
                                                },
                                            },
                                        },
                                    },
                                    required: ['nodes', 'directed', 'density', 'adjacencyMatrix', 'edges'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-polynomial-seeds': {
            get: {
                summary: '$0.001 - Generate polynomial and curve seeds',
                description: '$0.001 - Produce polynomial coefficients and elliptic-curve parameters using 512 random pixels.',
                operationId: 'getLavaPolynomialSeeds',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'degree', in: 'query', schema: { type: 'integer', default: 3, minimum: 1, maximum: 10 } },
                    { name: 'modulus', in: 'query', schema: { type: 'integer', default: 2147483647 } },
                    { name: 'curvePrime', in: 'query', schema: { type: 'integer', default: 2147483647 } },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        modulus: { type: 'integer' },
                                        degree: { type: 'integer' },
                                        coefficients: { type: 'array', items: { type: 'integer' } },
                                        curve: {
                                            type: 'object',
                                            properties: {
                                                prime: { type: 'integer' },
                                                a: { type: 'integer' },
                                                b: { type: 'integer' },
                                            },
                                        },
                                    },
                                    required: ['modulus', 'degree', 'coefficients', 'curve'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-constraint-pattern': {
            get: {
                summary: '$0.001 - Generate constrained binary pattern',
                description: '$0.001 - Produce a binary string with a fixed number of ones using 256 random pixels.',
                operationId: 'getLavaConstraintPattern',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'length', in: 'query', schema: { type: 'integer', default: 32, minimum: 1, maximum: 1024 } },
                    { name: 'ones', in: 'query', schema: { type: 'integer', default: 8, minimum: 0 } },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        length: { type: 'integer' },
                                        ones: { type: 'integer' },
                                        pattern: { type: 'string' },
                                        indices: { type: 'array', items: { type: 'integer' } },
                                    },
                                    required: ['length', 'ones', 'pattern', 'indices'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-distribution': {
            get: {
                summary: '$0.001 - Sample statistical distributions',
                description: '$0.001 - Generate samples from common distributions using 512 random pixels.',
                operationId: 'getLavaDistribution',
                tags: ['Lava Lamps'],
                parameters: [
                    {
                        name: 'type',
                        in: 'query',
                        schema: { type: 'string', enum: ['uniform', 'normal', 'exponential', 'poisson'], default: 'uniform' },
                    },
                    { name: 'count', in: 'query', schema: { type: 'integer', default: 100, minimum: 1, maximum: 1000 } },
                    { name: 'min', in: 'query', schema: { type: 'number' } },
                    { name: 'max', in: 'query', schema: { type: 'number' } },
                    { name: 'mean', in: 'query', schema: { type: 'number' } },
                    { name: 'stddev', in: 'query', schema: { type: 'number' } },
                    { name: 'lambda', in: 'query', schema: { type: 'number' } },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        type: { type: 'string' },
                                        count: { type: 'integer' },
                                        params: {
                                            type: 'object',
                                            properties: {
                                                min: { type: 'number' },
                                                max: { type: 'number' },
                                                mean: { type: 'number' },
                                                stddev: { type: 'number' },
                                                lambda: { type: 'number' },
                                            },
                                        },
                                        values: { type: 'array', items: { type: 'number' } },
                                    },
                                    required: ['type', 'count', 'params', 'values'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
        '/lava-ml-seed': {
            get: {
                summary: '$0.001 - Generate ML tensor seed',
                description: '$0.001 - Produce tensor initialization data using 512 random pixels.',
                operationId: 'getLavaMlSeed',
                tags: ['Lava Lamps'],
                parameters: [
                    { name: 'shape', in: 'query', schema: { type: 'string', example: '3,4' }, description: 'Comma or x-separated dimensions, e.g., 3x4x5' },
                    {
                        name: 'distribution',
                        in: 'query',
                        schema: { type: 'string', enum: ['uniform', 'normal', 'xavier', 'he'], default: 'uniform' },
                    },
                ],
                responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        shape: { type: 'array', items: { type: 'integer' } },
                                        size: { type: 'integer' },
                                        distribution: { type: 'string' },
                                        values: { type: 'array', items: { type: 'number' } },
                                    },
                                    required: ['shape', 'size', 'distribution', 'values'],
                                },
                            },
                        },
                    },
                    402: { description: 'Payment required' },
                },
            },
        },
    },
};
//# sourceMappingURL=open-api-schema.js.map