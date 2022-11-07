import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './App.css';
import { ReactDatePicker } from './ReactDatePicker';
import { Features } from './Feature';
function App() {
  const { control, register } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      reactStartDate: new Date(),
      reactEndDate: new Date(),
    },
  });
  return (
    <div>
      <Features title='Criteria:' />
      <Features
        title='React DatePicker'
        ease='8 - lost of customization and options'
        looks='6- basic but working'
        style='BEM done properly, I epxect to be easy to style'
        integration='7- 2 fields separated'
      >
        <ReactDatePicker control={control} />
      </Features>
    </div>
  );
}

export default App;
