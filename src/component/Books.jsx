import { BiEdit } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";


const Books = ({ books, setBooks, handleBookDetails, handleDeleteBook, displayedBook }) => {

  const toggleFavorite = (bookId) => {
    const updatedBooks = books.map((books) => {
      if (books.id === bookId) {
        return { ...books, isFavorite: !books.isFavorite };
      }
      return books;
    });
    setBooks(updatedBooks);
  };


  const detailsSubmit = (book) => {
    handleBookDetails(book);

  }

  return (

    <div className="flex flex-wrap gap-10 justify-center mt-24">
      {books.length > 0 ?
        (
          books.map((book) => (
            <div key={book.id} className="border p-4 w-[250px] ">
              <div className="flex flex-col justify-center items-center gap-4">
                <img src={book.imageUrl} alt={`${book.bookName}`} className="w-24 h-24 object-cover" />
                <div className=" space-y-3">
                  <h1 className="text-[15px]">{book.bookName}</h1>
                  <h2 className="text-xs">{book.author}</h2>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <p className="text-xs"> {book.rating}</p>
                      <p className="text-xs"> {book.publication}</p>
                    </div>

                    <div className="flex gap-1 justify-center items-center">
                      <button>
                        <BiEdit />
                      </button>
                      <button
                        className={`mt-2 ${book.isFavorite ? 'text-red-500' : 'text-red-300'}`}
                        onClick={() => toggleFavorite(book.id)}
                      >
                        {books.isFavorite ? <BsHeart /> : <BsHeartFill />}
                      </button>
                      <button onClick={() => handleDeleteBook(book.id)}>
                        <MdDelete />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-green-500 font-bold">
                      {`${book.price}৳`}
                    </p>
                    <button className="bg-green-500 text-white px-2 rounded-md " onClick={() => { detailsSubmit(book); }}>Buy Now</button>
                  </div>

                </div>
              </div>
            </div>
          ))
        ) : (<p>No Book Found</p>)}
    </div>

  );
};

export default Books;
