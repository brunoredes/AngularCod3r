module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globals: {
    "ts-jest": {
      "tsconfig": "./tsconfig.json"
    }
  }
}
