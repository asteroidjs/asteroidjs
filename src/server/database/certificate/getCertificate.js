import {readFileSync} from 'fs';
import {join} from 'path';

export const getCertificate = () => {
  return readFileSync(join(__dirname, 'certificate'), 'utf8');
};
