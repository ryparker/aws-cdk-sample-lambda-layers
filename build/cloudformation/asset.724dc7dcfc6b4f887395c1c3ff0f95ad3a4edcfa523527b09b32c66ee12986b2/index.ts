import chalk from 'chalk';

exports.handler = (event: Record<string, any>, context: Record<string, any>, callback: Function) => {
  console.log(chalk.green('Hello World!'));
  console.info(chalk.blue(`event: ${JSON.stringify(event)}`));
};
