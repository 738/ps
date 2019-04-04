// Simple assembler interpreter
// https://www.codewars.com/kata/simple-assembler-interpreter/train/javascript
function simple_assembler(program) {
  let dict = {};
  for (i=0;i<program.length;i++) {
    let tokens = program[i].split` `;
    if (tokens[0] === 'mov') {
      dict[tokens[1]] = isNaN(tokens[2]) ? dict[tokens[2]] : ~~tokens[2];
    } else if (tokens[0] === 'inc') {
      dict[tokens[1]] += 1;
    } else if (tokens[0] === 'dec') {
      dict[tokens[1]] -= 1;
    } else if (tokens[0] === 'jnz') {
      if (dict[tokens[1]] !== 0) i += (tokens[2] - 1);
    }
  }
	return dict;
}
