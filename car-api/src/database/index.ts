/* eslint-disable import/no-extraneous-dependencies */
import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database'; // Nome dado ao service do banco de dados
  createConnection({
    ...options,
  });
});
