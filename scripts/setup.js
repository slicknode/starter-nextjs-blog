const util = require('util');
const exec = util.promisify(require('child_process').exec);
const readFile = util.promisify(require('fs').readFile);
const writeFile = util.promisify(require('fs').writeFile);
const path = require('path');

(async () => {
  const { stdout, stderr } = await exec('slicknode endpoint');

  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  const endpoint = stdout.trim();
  console.log(`Adding GraphQL endpoint ${endpoint} to /.env file`);

  const envFile = path.resolve(path.join(__dirname, '../.env'));
  let envFileContent = await readFile(envFile, 'utf8');

  const envVars = {
    NEXT_PUBLIC_SLICKNODE_ENDPOINT: endpoint,
  };

  // Replace values in .env file content
  Object.keys(envVars).forEach(name => {
    envFileContent = envFileContent
      .replace(
        new RegExp(`${name}=.*`),
        name + '=' + envVars[name]
      );
  });

  // Write new env file
  await writeFile(envFile, envFileContent);
  console.log('\nSetup successful! Run `yarn dev` to start the local dev server\n');
})();
