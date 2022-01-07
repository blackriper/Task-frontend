import React from 'react'

export  function Addnot({mutation}) {
    return (
        <div className="mt-6">
        {mutation.isLoading ? (
          <p className="text-blue-400 text-lg text-center">Adding task...</p>
        ) : (
          <>
            {mutation.isError ? (
              <p className="text-red-500 text-lg text-center">An error occurred: {mutation.error.message}</p>
            ) : null}
  
            {mutation.isSuccess ? <p className="text-green-500 text-lg text-center">Task added!</p> : null}
          </>
        )}
      </div>
    )
}
