
const Book = ({book}) => {

    const {bookId, bookName, image, author, category, tags, rating} = book
  return (
    <>
        <div className="card bg-base-100 shadow-xl pt-6">
          <figure className="lg:px-10 pt-10 aspect-w-3 flex items-center justify-center aspect-h-2 mx-auto w-3/4">
            <img
              src={image}
              alt="Book Cover"
              className="rounded-xl w-3/4 object-cover mx-auto"
            />
          </figure>
          <div className="space-x-4 mt-10 flex justify-evenly items-center">
            {
                tags.map(tag => <span className="bg-prim py-1 px-3 rounded-lg cursor-pointer font-medium">{tag}</span>)
            }
          </div>
          <div className="card-body items-center">
            <h2 className="text-2xl font-bold font-sora">{bookName}</h2>
            <p className="font-sora text-lg font-medium">{author}</p>
          </div>
          <div className="flex justify-between items-center px-4 py-2">
            <p className="text-md font-medium font-sora">{category}</p>
            <div className="flex justify-center items-center gap-2">
                <p className="text-lg font-medium font-sora">{rating}</p>
                <img className="w-6" src="https://img.icons8.com/?size=32&id=16101&format=png" alt="" />
            </div>
          </div>
        </div>
    </>
  );
};

export default Book;
