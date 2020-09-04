import TransformNumbers from "./services/TransformNumbers";

const numbers = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
];

const expectedNumbers = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

let transformer: TransformNumbers;

beforeEach(() => {
  transformer = new TransformNumbers(numbers);
});

it('tests', () => {
  console.log('Initial state', numbers);
  console.log('Current state', transformer.getNumbers());
  expect(transformer.getNumbers()).toEqual(expectedNumbers);
  console.log('Current state', transformer.getNumbers());
});
it('tests aria', () => {
  const qwer: Array<number> = transformer.influenceAria()
  console.log('Initial state', qwer);
  expect(qwer).toEqual([0, 1, -1]);
  // console.log('Current state', transformer.getNumbers());
  // expect(transformer.getNumbers()).toEqual(expectedNumbers);
  // console.log('Current state', transformer.getNumbers());
});
it('tests Neighbours', () => {
  const qwer1: any = transformer.getNeighbours(3,3)
  console.log('Initial state', qwer1);
  expect(qwer1).toEqual({alive: 2, dead:6})
});
// console.log('Current state', transformer.getNumbers());
// expect(transformer.getNumbers()).toEqual(expectedNumbers);
// console.log('Current state', transformer.getNumbers());
