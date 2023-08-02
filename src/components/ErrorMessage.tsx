import React from 'react';

export default function ErrorMessage({message} : {message: string}) {
  return (
    <>
        {message && (
            <p className='font-sm text-red-500 text-left flex justify-start text-sm'>
                {message}
            </p>
        )}
    </>
  )
}
