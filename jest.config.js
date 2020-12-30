module.exports = {
  moduleDirectories: ['node_modules', './'],
  setupFilesAfterEnv: ["<rootDir>./setupTests.js"],
  snapshotSerializers: ["@emotion/jest/enzyme-serializer"]
}

// module.exports = {
//   roots: ['<rootDir>'],
//   moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
//   testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
//   transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
//   transform: {
//     '^.+\\.(ts|tsx)$': 'babel-jest',
//   },
//   watchPlugins: [
//     'jest-watch-typeahead/filename',
//     'jest-watch-typeahead/testname',
//   ],
//   moduleNameMapper: {
//     '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//     '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
//   },
//   moduleDirectories: ['node_modules', './'],
// }