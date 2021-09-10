const chalk = require('chalk');

exports.handler = (event, context, callback) => {
  console.log(chalk.green('Hello World!'));
  console.info(chalk.blue(`event: ${JSON.stringify(event)}`));
};
