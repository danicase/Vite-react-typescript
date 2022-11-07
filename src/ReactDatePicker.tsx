import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { Controller, useWatch } from 'react-hook-form';
interface DatePickerProps {
  control: any;
}
export const ReactDatePicker = ({ control }: DatePickerProps) => {
  const startDate = useWatch({
    control,
    name: 'reactStartDate',
  });
  const endDate = useWatch({
    control,
    name: 'reactEndDate',
  });
  return (
    <>
      <Controller
        control={control}
        name='reactStartDate'
        render={({ field: { onChange, value } }) => (
          <DatePicker
            selected={value}
            onChange={(date) => onChange(date)}
            selectsStart
            showTimeInput
            timeInputLabel='Time:'
            dateFormat='dd MMM yy hh:mm aa'
            startDate={value}
            endDate={endDate}
            shouldCloseOnSelect={false}
            monthsShown={2}
          />
        )}
      />
      <Controller
        control={control}
        name='reactEndDate'
        render={({ field: { onChange, value } }) => (
          <DatePicker
            selected={endDate}
            onChange={(date) => onChange(date)}
            selectsEnd
            showTimeInput
            startDate={startDate}
            timeInputLabel='Time:'
            dateFormat='dd MMM yy hh:mm aa'
            endDate={value}
            minDate={startDate}
            shouldCloseOnSelect={false}
            monthsShown={2}
          />
        )}
      />
    </>
  );
};
