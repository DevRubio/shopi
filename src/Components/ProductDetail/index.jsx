import { useContext } from "react";
import { Context } from "../../Context";

const ProductDetail = () => {
  const context = useContext(Context)

  return (
    <aside className={`${context.openProductDetail ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]> top-68`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <button onClick={context.toggleCloseProductDetail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className='w-6 h-6 text-red-700'
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg' 
        src={context.productToShow.images ? context.productToShow.images[0]: ''} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context?.productToShow?.price}</span>
        <span className='font-medium text-md'>${context?.productToShow?.title}</span>
        <span className='font-light text-sm'>${context?.productToShow?.description}</span>
      </p>
    </aside>
  );
};

export { ProductDetail };
