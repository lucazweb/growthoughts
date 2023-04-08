import React from 'react'
import DatePicker, { type ReactDatePickerProps } from 'react-datepicker'
import { DatePickerWrapper } from './styled'
import 'react-datepicker/dist/react-datepicker.css'

interface DatepickerProps extends ReactDatePickerProps {}

export const Datepicker = (props: DatepickerProps) => {
  return (
    <DatePickerWrapper>
      <DatePicker {...props} />
    </DatePickerWrapper>
  )
}
