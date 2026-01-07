export const ThreeDots = () => {
  return (
    <div className="w-full flex justify-center py-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="w-3 h-3 bg-ds-blue-200 rounded-full inline-block mx-1"></div>
      ))}
    </div>
  )
}
