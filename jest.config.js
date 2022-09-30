module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest"
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)',
    '**/__tests__/**/*.spec.(js|jsx|ts|tsx)',
  ],
  collectCoverageFrom: [
    'src/utils/**/*.{js,vue}',
    '!src/utils/auth.js',
    '!src/utils/request.js',
    'src/components/**/*.{js,vue}'
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  // 'collectCoverage': true,
  'coverageReporters': [
    'html',
    'text-summary',
  ],
  verbose: true,
  testURL: 'http://localhost/'
}
