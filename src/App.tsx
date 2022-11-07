import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './App.css';
import { ReactDatePicker } from './ReactDatePicker';
import { Features } from './Feature';
import { Flatpickr } from './Flatpickr';
function App() {
  const { control } = useForm({
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
        integration='7- 2 fields separated, no error handling'
        href='https://github.com/flatpickr/flatpickr'
      >
        <ReactDatePicker control={control} />
      </Features>
      <Features
        title='Flatpickr'
        ease='7 - lost of customization'
        looks='6- basic but working no multiple months'
        style='CSS only lots of theming'
        integration='7- 2 fields separated, no error handling'
      >
        <Flatpickr control={control} />
      </Features>
    </div>
  );
}

export default App;
