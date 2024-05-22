/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input as NextInput } from '@nextui-org/react'
import React from 'react'
import { Control, useController } from 'react-hook-form'

type Props = {
  name: string,
  label: string,
  placeholder?: string,
  type?: string,
  control: Control<any>,
  required?: boolean,
  endContent?: JSX.Element,
  maxLength?: number,
  minLength?: number,
  pattern?: RegExp
}

export const Input: React.FC<Props> = ({name, label, placeholder, type, control, required = true, endContent, maxLength, minLength, pattern}) => {
  const { field, fieldState: { invalid } } = useController({
    name,
    control,
    rules: {
      required,
      maxLength,
      minLength,
      pattern
    }
  })

  return (
    <>
      <NextInput isRequired id={name} label={label} type={type} placeholder={placeholder} value={field.value} name={field.name} isInvalid={invalid} onChange={field.onChange} onBlur={field.onBlur}/>
    </>
  )
}
