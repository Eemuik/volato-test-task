import base64 from 'react-native-base64';
import { sha256 } from 'react-native-sha256';
import { validateArrayToBeNumbers } from '../helpers';
import { Model } from '../types';

export const models: Model[] = [
  {
    name: 'Model 1 (Sha256)',
    fields: {
      first: {
        label: 'First key',
        readOnly: false,
        type: 'string',
      },
      second: {
        label: 'Second key',
        readOnly: false,
        type: 'string',
      },
      result: {
        label: 'sha256',
        readOnly: true,
        type: 'string',
        calculate: (first, second) => {
          const firstBase64 = base64.encode(first);
          const secondBase64 = base64.encode(second);

          return sha256(firstBase64 + secondBase64);
        },
        validate: (...values) => values.every(item => !!item.length),
      },
    },
  },
  {
    name: 'Model 2 (Math)',
    fields: {
      first: {
        label: 'First',
        readOnly: false,
        type: 'number',
      },
      second: {
        label: 'Second',
        readOnly: false,
        type: 'number',
      },
      third: {
        label: 'Third',
        readOnly: false,
        type: 'number',
      },
      fourth: {
        label: 'Fourth',
        readOnly: false,
        type: 'number',
      },
      fifth: {
        label: 'Fifth',
        readOnly: false,
        type: 'number',
      },
      sixth: {
        label: 'Sixth',
        readOnly: false,
        type: 'number',
      },
      seventh: {
        label: 'Seventh',
        readOnly: false,
        type: 'number',
      },
      eighth: {
        label: 'Eighth',
        readOnly: false,
        type: 'number',
      },
      ninth: {
        label: 'Ninth',
        readOnly: false,
        type: 'number',
      },
      tenth: {
        label: 'Tenth',
        readOnly: false,
        type: 'number',
      },
      mean: {
        label: 'Mean',
        readOnly: true,
        type: 'number',
        calculate: (...values) => {
          return Math.round(values.reduce((a, b) => a + +b, 0) / values.length);
        },
        validate: validateArrayToBeNumbers,
      },
      median: {
        label: 'Median',
        readOnly: true,
        type: 'number',
        calculate: (...values: string[]) => {
          let i = Math.floor(values.length / 2);
          return values.slice().sort((a, b) => +a - +b)[i];
        },
        validate: validateArrayToBeNumbers,
      },
      deviation: {
        label: 'Deviation',
        readOnly: true,
        type: 'number',
        calculate: (...values: string[]) => {
          const n = values.length;
          const mean = values.reduce((a, b) => a + +b, 0) / n;
          return Math.sqrt(
            values.map(x => Math.pow(+x - mean, 2), 0).reduce((a, b) => a + b) /
              n,
          );
        },
        validate: validateArrayToBeNumbers,
      },
    },
  },
];
