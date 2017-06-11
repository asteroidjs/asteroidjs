import setupRethink from './rethinkDB/setupRethink';

export default async function setupDB(isUpdate = false) = setupRethink();
