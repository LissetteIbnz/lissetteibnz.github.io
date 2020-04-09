module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  restoreMocks: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^content/(.*)$': '<rootDir>/content/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/config/test/setup.ts'],
};
