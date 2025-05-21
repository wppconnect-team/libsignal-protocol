/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(src/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: './src/__test-utils__/custom-jest-environment.js',
  moduleNameMapper: {
    '^@bufbuild/protobuf/wire$': '<rootDir>/node_modules/@bufbuild/protobuf/dist/cjs/wire',
  },
}
