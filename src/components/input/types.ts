import { Control } from 'react-hook-form';

export type InputProps = {
  name: string;
  type: 'string' | 'number';
  control: Control<any>;
  disabled?: boolean;
  placeholder?: string;
};
