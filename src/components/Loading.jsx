
export function Loading({text}) {
    return (
        <div className="grid grid-rows-1 justify-items-center mt-52">
            <div className="w-24 h-24 border-l-2 border-blue-900 rounded-full animate-spin"></div>
            <span className="text-center text-blue-900 mt-5">{text}</span>
        </div>
    )
}
