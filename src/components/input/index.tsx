import { Controller, ControllerRenderProps } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  name,
  disabled,
  control,
  type,
  placeholder,
}) => {
  const getProps = (field: ControllerRenderProps): TextInputProps => {
    const { onChange, value, ...registerProps } = field;
    const onChangeText = (value: string) => {
      onChange({ target: { value, name } });
    };

    return {
      ...registerProps,
      keyboardType: type === 'number' ? 'numeric' : 'default',
      onChangeText,
      placeholder,
      placeholderTextColor: 'black',
      editable: !disabled,
      value: `${value ?? ''}`,
    };
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextInput style={styles.input} {...getProps(field)} />
      )}
    />
  );
};

export default Input;
