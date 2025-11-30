export declare const openApiSchema: {
    openapi: string;
    info: {
        title: string;
        version: string;
        description: string;
    };
    servers: {
        url: string;
        description: string;
    }[];
    paths: {
        '/lava-sha256': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        sha256: {
                                            type: string;
                                            description: string;
                                            example: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-int': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        value: {
                                            type: string;
                                        };
                                        min: {
                                            type: string;
                                        };
                                        max: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-bytes': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        bytes: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-float': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        value: {
                                            type: string;
                                        };
                                        min: {
                                            type: string;
                                        };
                                        max: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-bool': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        value: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-uuid': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        uuid: {
                                            type: string;
                                            format: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-string': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        value: {
                                            type: string;
                                        };
                                        length: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-sha512': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        sha512: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-sha3-256': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        sha3_256: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-seed': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        seed: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-entropy': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        entropy: {
                                            type: string;
                                            description: string;
                                        };
                                        bits: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-permutation': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        size: {
                                            type: string;
                                        };
                                        values: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-matrix': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: ({
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                    description: string;
                } | {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum?: never;
                        maximum?: never;
                    };
                    description: string;
                })[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        rows: {
                                            type: string;
                                        };
                                        cols: {
                                            type: string;
                                        };
                                        min: {
                                            type: string;
                                        };
                                        max: {
                                            type: string;
                                        };
                                        values: {
                                            type: string;
                                            items: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-bits': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        bits: {
                                            type: string;
                                        };
                                        length: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-password': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: ({
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                } | {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: boolean;
                        minimum?: never;
                        maximum?: never;
                    };
                })[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        password: {
                                            type: string;
                                        };
                                        length: {
                                            type: string;
                                        };
                                        charset: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-prime-candidate': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        candidate: {
                                            type: string;
                                            description: string;
                                        };
                                        bitLength: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-noise-texture': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        width: {
                                            type: string;
                                        };
                                        height: {
                                            type: string;
                                        };
                                        encoding: {
                                            type: string;
                                        };
                                        format: {
                                            type: string;
                                        };
                                        data: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-walk': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        steps: {
                                            type: string;
                                            items: {
                                                type: string;
                                                enum: string[];
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-delay': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        delayMs: {
                                            type: string;
                                        };
                                        min: {
                                            type: string;
                                        };
                                        max: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-color-palette': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        colors: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-bloom-filter': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        size: {
                                            type: string;
                                        };
                                        numHashes: {
                                            type: string;
                                        };
                                        bitArray: {
                                            type: string;
                                            description: string;
                                        };
                                        hashSalts: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-custom-permutation': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                    description: string;
                }[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        original: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        shuffled: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-random-graph': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: ({
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                } | {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: boolean;
                        minimum?: never;
                        maximum?: never;
                    };
                })[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        nodes: {
                                            type: string;
                                        };
                                        directed: {
                                            type: string;
                                        };
                                        density: {
                                            type: string;
                                        };
                                        adjacencyMatrix: {
                                            type: string;
                                            items: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        edges: {
                                            type: string;
                                            items: {
                                                type: string;
                                                properties: {
                                                    source: {
                                                        type: string;
                                                    };
                                                    target: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-polynomial-seeds': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: ({
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                } | {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum?: never;
                        maximum?: never;
                    };
                })[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        modulus: {
                                            type: string;
                                        };
                                        degree: {
                                            type: string;
                                        };
                                        coefficients: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        curve: {
                                            type: string;
                                            properties: {
                                                prime: {
                                                    type: string;
                                                };
                                                a: {
                                                    type: string;
                                                };
                                                b: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-constraint-pattern': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: ({
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                    };
                } | {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum?: never;
                    };
                })[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        length: {
                                            type: string;
                                        };
                                        ones: {
                                            type: string;
                                        };
                                        pattern: {
                                            type: string;
                                        };
                                        indices: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-distribution': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: ({
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        enum: string[];
                        default: string;
                        minimum?: never;
                        maximum?: never;
                    };
                } | {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        default: number;
                        minimum: number;
                        maximum: number;
                        enum?: never;
                    };
                } | {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        enum?: never;
                        default?: never;
                        minimum?: never;
                        maximum?: never;
                    };
                })[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        type: {
                                            type: string;
                                        };
                                        count: {
                                            type: string;
                                        };
                                        params: {
                                            type: string;
                                            properties: {
                                                min: {
                                                    type: string;
                                                };
                                                max: {
                                                    type: string;
                                                };
                                                mean: {
                                                    type: string;
                                                };
                                                stddev: {
                                                    type: string;
                                                };
                                                lambda: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        values: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
        '/lava-ml-seed': {
            get: {
                summary: string;
                description: string;
                operationId: string;
                tags: string[];
                parameters: ({
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        example: string;
                        enum?: never;
                        default?: never;
                    };
                    description: string;
                } | {
                    name: string;
                    in: string;
                    schema: {
                        type: string;
                        enum: string[];
                        default: string;
                        example?: never;
                    };
                    description?: never;
                })[];
                responses: {
                    '200': {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        shape: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        size: {
                                            type: string;
                                        };
                                        distribution: {
                                            type: string;
                                        };
                                        values: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                    402: {
                        description: string;
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=open-api-schema.d.ts.map