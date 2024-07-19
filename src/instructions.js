export const instructions = new Map([
    ['push', 0b000001],
    ['pop', 0b000010],
    ['add', 0b000011],
    ['sub', 0b000100],
    ['load', 0b000011],
])

export function decodeInstruction(instr) {
  for (let [key, value] of instructions.entries()) {
    if (value === instr) return key;
  }
}
