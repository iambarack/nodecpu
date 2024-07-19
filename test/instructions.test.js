import { instructions,decodeInstruction } from "../src/instructions.js";

console.log(instructions);

console.log(decodeInstruction(8));

// CPU INSTRUCTION ENCODING:
//     OP code 6 bit
//     ADDR1 5 bit
//     ADDR2 5 bit
//     IMMEDIATE_VALUE 16 bit