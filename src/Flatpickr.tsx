import { Controller, useWatch } from 'react-hook-form';
import ReactFlatpickr from 'react-flatpickr';
import { useState } from 'react';
import 'flatpickr/dist/themes/material_green.css';

interface Flatpickr {
  control: any;
}
export const Flatpickr = ({ control }: Flatpickr) => {
  return (
    <>
      <Controller
        control={control}
        name='reactStartDate'
        render={({ field: { onChange, value } }) => (
          <ReactFlatpickr
            options={{ enableTime: true, dateFormat: 'd M y H:i' }}
            value={value}
            onChange={([startDate]) => {
              onChange(startDate);
            }}
          />
        )}
      />
      <Controller
        control={control}
        name='reactEndDate'
        render={({ field: { onChange, value } }) => (
          <ReactFlatpickr
            options={{ enableTime: true, dateFormat: 'd M y H:i' }}
            value={value}
            onChange={([endDate]) => {
              onChange(endDate);
            }}
          />
        )}
      />
    </>
  );
};
