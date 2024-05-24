import { Button, Card, CardBody } from '@nextui-org/react'
import React, {useState } from 'react'
import { Alert, Input, Textarea } from '../../components'
import { AlertData, ContactUsForm } from '../../types'
import { useForm } from 'react-hook-form'
import { useCreateFeedbackMutation } from '../../app/services/feedbackApi'
import { useAppSelector } from '../../app/hooks'
import { selectCurrentUser } from '../../app/slicers/userSlice'
import { Link } from 'react-router-dom'
import { MdOutlineLogin } from 'react-icons/md'

export const ContactUs = () => {
  const [alert, setAlert] = useState<AlertData | null>(null)
  const user = useAppSelector(selectCurrentUser)
  const { handleSubmit, control, formState: { errors} } = useForm<ContactUsForm>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      title: '',
      description: '',
    }
  })
  const [ createFeedback ] = useCreateFeedbackMutation()

  const onSubmit = async (data: ContactUsForm) => {
    try {
      const feedbackData = {
        ...data,
        email: user?.email as string
      }
      await createFeedback(feedbackData).unwrap().then((res) => {
        if(res.data.success.message){
          setAlert({
            data: res.data.success.message,
            type: 'success'
          })
        }
        if(res.data.error.message){
          setAlert({
            data: res.data.error.message,
            type: 'error'
          })
        }
      })
    } catch (error) {
      setAlert({
        data: 'Something went wrong',
        type: 'error'
      })
    }
  }

  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className='text-5xl font-bold'>Contact Us</h1>
        <p className='text-2xl w-1/2 text-center my-10 text-[#006FEE]'>Feel free to get in touch! We're here to assist you. Use the contact form on our website or visit us on GitHub, where you can leave a comment or rate our work. We look forward to your questions, suggestions, and feedback!</p>
        <Card className='w-1/3'>
          <CardBody>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <Input size='lg' control={control} name='title' label="Title" placeholder="Enter title" type="text" />
              <Textarea size='lg' control={control} name='description' label="Description" placeholder="Enter description" maxLength={500}/>
              <Button fullWidth color="primary" type='submit'>Submit</Button>
            </form>          
          </CardBody>
        </Card>
          <Link to={'/auth'}>
            <Button color='primary' size='lg' className='text-xl'>Login <MdOutlineLogin className='text-2xl'/></Button>
          </Link>
        <div className="w-1/3">
          {alert && (
            <Alert type={alert.type} data={alert.data} setAlert={() => setAlert(null)}/>
          )}
        </div> 
      </div>
    </div>
  )
}
