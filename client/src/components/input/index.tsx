/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { button, Input as NextInput } from '@nextui-org/react'
import React, { useState } from 'react'
import { Control, useController } from 'react-hook-form'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

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
  pattern?: RegExp,
  size?: 'sm' | 'md' | 'lg' | undefined
}

export const Input: React.FC<Props> = ({name, label, placeholder, type = 'text', control, size, required = true, endContent, maxLength, minLength, pattern}) => {
  const [inputType, setInputType] = useState<string>(type)
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

  const handleVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }

  return (
    <div className='relative'>
      { type === 'password' ? (
        <>
          <NextInput size={size} isRequired id={name} label={label} type={inputType} placeholder={placeholder} value={field.value} name={field.name} isInvalid={invalid} onChange={field.onChange} onBlur={field.onBlur}/>
          <button type='button' className='absolute top-1/2 right-5' onClick={handleVisibility}>
            {inputType === 'password' ? <MdVisibility className='text-xl text-[#006FEE]'/> : <MdVisibilityOff className='text-xl text-[#006FEE]'/>}
          </button>
        </>
      ) : (
        <NextInput size={size} isRequired id={name} label={label} type={type} placeholder={placeholder} value={field.value} name={field.name} isInvalid={invalid} onChange={field.onChange} onBlur={field.onBlur}/>
      )}
    </div>
  )
}
