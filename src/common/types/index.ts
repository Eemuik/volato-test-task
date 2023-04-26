export type Model = {
  name: string;
  fields: Record<string, BaseField>;
};

export type ReadonlyField = {
  readOnly: true;
  calculate: (...args: string[]) => Promise<number | string> | number | string;
  validate: (...args: string[]) => boolean;
};

export type AdvancedField =
  | {
      readOnly: false;
      calculate?: never;
      validate?: never;
    }
  | ReadonlyField;

export type BaseField = {
  label: string;
  type: 'number' | 'string';
} & AdvancedField;
