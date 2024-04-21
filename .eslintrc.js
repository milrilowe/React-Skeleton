module.exports = {
env: {
browser: true,
es2021: true,
},
extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
overrides: [
{
env: {
node: true,
},
files: ['.eslintrc.{js,cjs}'],
parserOptions: {
sourceType: 'script',
},
},
],
parser: '@typescript-eslint/parser',
parserOptions: {
ecmaVersion: 'latest',
},
plugins: ['@typescript-eslint', 'react'],
rules: {
indent: ['warn', 'tab'],
'linebreak-style': ['warn', process.platform === 'win32' ? 'windows' : 'unix'],
quotes: ['warn', 'single'],
'react/react-in-jsx-scope': 'off',
'react/jsx-uses-react': 'off',
semi: ['warn', 'always'],
},
}
