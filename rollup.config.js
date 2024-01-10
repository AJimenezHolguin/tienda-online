export default {
	input: 'src/index.js',
	output: {
		file: 'public/bundle.js',
		format: 'cjs',
	},
	plugins: [
		babel({
			exclude: 'node_modules/**'	
		})
	],
	external: ['module1', 'module2']
};
