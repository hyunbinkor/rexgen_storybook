require('dotenv').config();

const { execSync } = require('child_process');

const command = `yarn chromatic --project-token=${process.env.CHROMATIC_PROJECT_TOKEN}`;

execSync(command, { stdio: 'inherit' });
