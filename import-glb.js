// Script for importing GLB files using gltfjsx
// This script finds all of the glb files in the assets folder and generates a corresponding Model.jsx file for each one using the gltfjsx command.

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'assets', 'models');
const outputDir = path.join(__dirname, 'generated-jsx-models');

fs.readdir(modelsDir, (err, files) => {
	if (err) {
		console.error('Error reading models directory:', err);
		return;
	}
	// Check whether the output directory exists, if not create it
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir);
	}
	files.forEach((file) => {
		if (path.extname(file) === '.glb') {
			const filePath = path.join(modelsDir, file);
			const command = `npx gltfjsx ${filePath} -o ${path.join(outputDir, path.basename(file, '.glb') + '.jsx')}`;
			exec(command, (err, stdout, stderr) => {
				if (err) {
					console.error(`Error executing command for ${file}:`, err);
					return;
				}
				console.log(`Generated Model.jsx for ${file}:\n${stdout}`);
				if (stderr) {
					console.error(`Error output for ${file}:\n${stderr}`);
				}
			});
		}
	});
});
