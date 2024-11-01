import bannerImg from '../../public/books.jpg'

const Banner = () => {

  return (
    <>
        <div className="mx-auto rounded-xl shadow-lg lg:w-[80%] mt-28 lg:mt-44 pt-24 lg:py-40 lg:px-10 flex flex-col lg:flex-row justify-around lg:items-center lg:gap-10 gap-24 bg-opacity-50">
            <div className='space-y-14 lg:block flex flex-col items-center'>
               <h1 className='font-sora font-bold text-6xl text-center lg:text-left'>Books to Freshen Up your Bookshelf</h1> 
               <button className='text-center font-sora font-bold text-xl p-2 lg:p-4 bg-third rounded-lg hover:bg-secon'>View The List</button>
            </div>
            <div className='lg:w-3/4 w-full px-2'>
                <img className='rounded-lg' src={bannerImg} alt="" />
            </div>
        </div>
    </>
  )
}

export default Banner
