import { useController } from "react-hook-form"
import { Textarea as NextTextarea } from '@nextui-org/react'

type Props = {
  name: string,
  label: string,
  placeholder?: string,
  control: Control<any>,
  required?: boolean,
  maxLength?: number,
  size?: 'sm' | 'md' | 'lg' | undefined
}

export const Textarea: React.FC<Props> = ({name, label, placeholder, control, required = true, maxLength = 500, size}) => {
  const { field, fieldState: { invalid } } = useController({
    name,
    control,
    rules: {
      required,
      maxLength,
    }
  })

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (maxLength && e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    field.onChange(e);
  };

  return (
    <>
      <NextTextarea size={size} isRequired id={name} label={label} placeholder={placeholder} value={field.value} name={field.name} isInvalid={invalid} onChange={handleInputChange} onBlur={field.onBlur}/>
      <p className={`self-end ${field.value.length >= maxLength && 'text-[#F31260]'}`}>{field.value.length} / {maxLength}</p>
    </>
  )
}
