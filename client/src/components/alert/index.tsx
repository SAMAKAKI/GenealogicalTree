import React from 'react'
import { IoMdClose } from 'react-icons/io'

type Props = {
  type: string,
  data: string,
  setAlert: () => void
}

export const Alert: React.FC<Props> = ({ type, data, setAlert }) => {
  return (
    <>
      <div className={`w-full rounded-xl py-3 px-6 flex justify-between mt-3 ${type === 'error' && 'bg-red-400 text-black'} ${type === 'success' && 'bg-emerald-400 text-black'}`}>
        {data}
        <button onClick={setAlert}><IoMdClose /></button>
      </div>
    </>
  )
}
