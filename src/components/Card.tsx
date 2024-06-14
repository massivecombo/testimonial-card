function Card ({name, handle, comment} : {name: string, handle: string, comment: string}) {

  return (
    <div className="w-[340px] mt-[200px] mx-4 p-6 bg-white border border-slate-200 border-solid rounded-lg shadow-sm">
      <div className="flex flex-row">
        <img className="w-12 h-12" src="/testimonial-card/profile-thumbnail.png" alt="Image of profile picture for person who wrote testimonial"/>
        <div className="flex flex-col justify-end ml-2">
          <h3 className="text-lg text-neutral-900 font-semibold">{name}</h3>
          <a className="text-sm" href="#">{handle}</a>
        </div>
      </div>
      <p className="text-base mt-2">{comment}</p>
    </div>
  )
}

export default Card;