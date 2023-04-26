import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { models } from './src/common/constants';
import { Model } from './src/common/types';
import ModelForm from './src/components/model-form';

const App = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  return (
    <SafeAreaView>
      <Dropdown
        data={models}
        placeholder="Select model"
        labelField={'name'}
        valueField={'fields'}
        onChange={setSelectedModel}
      />
      {selectedModel && <ModelForm {...selectedModel} />}
    </SafeAreaView>
  );
};

export default App;
