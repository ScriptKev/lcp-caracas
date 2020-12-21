module.exports = {
  moduleDirectories: ['node_modules', './'],
  setupFilesAfterEnv: ["<rootDir>./setupTests.js"],
  snapshotSerializers: ["@emotion/jest/enzyme-serializer"]
}