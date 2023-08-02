import React from 'react'

export default function Wrapper({children, title} : {children: JSX.Element; title: string}) {
  return (
    <>
    {children && (
        <div className='bg-neutral-200 w-2/4 py-5 mx-auto my-5 rounded-lg border-2 border-black'>
            {title && (
        <p className='uppercase text-blue-900 font-extrabold underline underline-offset-9 text-center'>{title}</p>
            )}
        {children}
    </div>
    )}
    </>
  )
}
