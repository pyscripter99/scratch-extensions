class seedRandom {
    getInfo() {
        return {
            id: "seededrandom",
            name: "Random",
            blocks: [
                {
                    opcode: "setseed",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "set seed [SEED]",
                    arguments: {
                        SEED: {
                            type: ArgumentType.STRING,
                            defaultValue: "Seed",
                        },
                    },
                },
                {
                    opcode: "mathRandomBetween",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "random number between [X] and [Y]",
                    arguments: {
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                    },
                },
            ],
        };
    }

    setseed(args) {
        fetch(
            "https://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"
        )
            .then((response) => response.text())
            .then((jsCode) => {
                eval(jsCode);

                Math.seedrandom(args.SEED);
            });
    }

    mathRandomBetween(args) {
        const x = args.X;
        const y = args.Y;
        return x + Math.random() * (y - x);
    }
}

Scratch.extensions.register(new seedRandom());
