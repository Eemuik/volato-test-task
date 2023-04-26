import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Model, ReadonlyField } from '../../common/types';
import Input from '../input';
import { styles } from './styles';

const ModelForm: React.FC<Model> = ({ fields, name }) => {
  const fieldEntries = Object.entries(fields);
  const { control, watch, setValue, reset } = useForm({
    defaultValues: fieldEntries.reduce<Record<string, string>>((acc, [key]) => {
      acc[key] = '';

      return acc;
    }, {}),
  });

  const readOnlyFields = fieldEntries.filter(
    ([, value]) => value.readOnly,
  ) as Array<[string, ReadonlyField]>;
  const watcher: string[] = watch(
    fieldEntries.filter(([, value]) => !value.readOnly).map(([key]) => key),
  );

  useEffect(() => {
    readOnlyFields.forEach(async ([key, value]) => {
      const isValid = value.validate(...watcher);

      if (isValid) {
        const calculatedValue = (await value.calculate(...watcher)).toString();
        setValue(key, calculatedValue);
      } else setValue(key, '');
    });
  }, [watcher, readOnlyFields]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    reset();
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={styles.modelForm}>
      {fieldEntries.map(([key, value]) => {
        return (
          <Input
            key={key}
            type={value.type}
            name={key}
            disabled={value.readOnly}
            control={control}
            placeholder={value.label}
          />
        );
      })}
    </View>
  );
};

export default ModelForm;
