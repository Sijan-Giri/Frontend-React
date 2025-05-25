import { Link } from "react-router-dom"

const Card = ({data}) => {

  return (
    <>
    <div class="relative flex flex-col w-96 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl my-6">
  <div class="group relative h-56 overflow-hidden">
    <img
      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      src={data?.image}
      alt="card-image"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>

  <div class="flex-1 p-5">
    <h6 class="mb-2 text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-slate-900">
      {data?.title}
    </h6>
    <p class="text-slate-600 font-light leading-relaxed">
      {data?.description}
    </p>
  </div>

  <div class="px-5 pb-5">
    <Link to={`/blogDetail/${data?._id}`}><button
      type="button"
      class="w-full rounded-md bg-slate-800 py-2 px-4 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
    >
      Read more
    </button></Link>
  </div>
</div>

    </>
  )
}

export default Card