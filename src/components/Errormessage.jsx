
export function Errormessage({error}) {
    return (
        <div className="grid grid-rows-1 justify-items-center mt-52">
            <p className="text-red-500 text-xl ">An error has occurred:  {error.message}</p>
        </div>
    )
}
