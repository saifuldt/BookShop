import { useState } from "react";
import Books from './Books';
import { CgClose } from 'react-icons/cg';
import { BsHeartFill } from "react-icons/bs";


const BookDetails = ({ books, setBooks, handleDeleteBook, displayedBook, searchTerm }) => {

  const [modal, setModal] = useState(false);
  const [bookInfo, setBookInfo] = useState({});
  const handleBookDetails = (book) => {
    setModal(true);
    return book,
      setBookInfo(book);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
{(books.length > 0) || (searchTerm) ?
      (<Books
        handleDeleteBook={handleDeleteBook}
        handleBookDetails={handleBookDetails}
        books={books} setBooks={setBooks}
        displayedBook={displayedBook}
      />) : ( <p>No Book Available</p> )  }

      {modal && (
        <div className=" dark:bg-gray-500 bg-gray-200 fixed  h-screen  flex justify-center items-center w-full md:mt-20">
          <div className=" dark:bg-black bg-white w-[350px] md:w-4/6 h-3/4 p-4 -mt-20 rounded-lg ">
            <div className="flex justify-between p-4 ">
              <h1 className="text-xl text-green-500">Book Details</h1>
              <div className="flex gap-4 justify-center items-center">
                <button
                  className="mt-2 text-red-500"
                >
                  <BsHeartFill />
                </button>
                <button onClick={closeModal}><CgClose /></button>
              </div>
            </div>
            <div className="flex gap-4">
              <img className="w-[250px] h-[300px]" src={bookInfo.imageUrl} alt={bookInfo.bookName} />
              <div className="flex flex-col gap-4 justify-center ">
                <h1 className="text-xl">{bookInfo.bookName} </h1>
                <h2 className="text-xs ">{bookInfo.author}</h2>
                <p className="text-sm ">{bookInfo.bookReview}</p>
                <button onClick={closeModal} className="rounded-xl bg-white border border-gray-400 h-8 w-40 text-green-500 font-bold py-2 flex justify-between items-center "><span className="rounded-xl bg-green-500 px-2 text-white ">Buy Now</span> <span>{`${bookInfo.price}৳`}</span></button>
              </div>
            </div>
          </div>
        </div>)}
    </>
  )
}

export default BookDetails