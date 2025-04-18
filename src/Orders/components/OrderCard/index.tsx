import { XMarkIcon } from '@heroicons/react/24/solid'

// eslint-disable-next-line react/prop-types
function OrderCard({ id, title, imageUrl, price, onDelete }) {
  return (
    <div className=" flex justify-between items-center gap-4  mt-[1rem] border-b-[2px] w-full border-slate-200">
      <div className="flex gap-2 items-center justify-center mb-[1rem] ">
        <figure className="w-[4rem] h-[4rem]">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={`${imageUrl}`}
            alt={`${title}`}
          />
        </figure>
        <p className="text-md font-light ">{title}</p>
      </div>
      <div className=" flex items-center justify-center mb-[1rem]  gap-2">
        <p className=" text-lg font-bold">${price}</p>
        <XMarkIcon
          onClick={event => onDelete(event, id)}
          className="h-6 w-6 text-red-500 cursor-pointer"
        ></XMarkIcon>
      </div>
    </div>
  )
}

export default OrderCard
