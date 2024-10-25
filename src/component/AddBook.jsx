import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';

const AddBook = ({ handleAddBook,closeModal }) => {
  const [books, setBooks] = useState({
    id: crypto.randomUUID(),
    bookName: "",
    author: "",
    rating: "",
    publication: "",
    imageUrl: "",
    category: "",
    bookReview: "",
    isFavorite: false,
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooks({
      ...books,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      handleAddBook(books);
      resetForm();
      closeModal();
    }
  };

  const resetForm = () => {
    setBooks({
      id: crypto.randomUUID(),
      bookName: "",
      author: "",
      rating: "",
      publication: "",
      imageUrl: "",
      price: "",
      category: "",
      bookReview: "",
      isFavorite: false,
    });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!books.bookName.trim()) newErrors.bookName = "Book Name is required";
    if (!books.author.trim()) newErrors.author = "Author Name is required";
    if (!books.rating.trim()) newErrors.rating = "Rating is required";
    if (!books.publication.trim()) newErrors.publication = "Publication is required";
    if (!books.imageUrl.trim()) newErrors.imageUrl = "Image URL is required";
    if (!books.category.trim()) newErrors.category = "Category is required";
    if (!books.price.trim()) newErrors.price = "price is required";
    if (!books.bookReview.trim()) newErrors.bookReview = "Book Review is required";

    return newErrors;
  };

  return (
    <div onClick={closeModal} className=' fixed h-screen flex justify-center items-center bg-gray-300 w-full md:mt-20 '>

      <form onClick={(e)=> e.stopPropagation()} className=" -mt-20 rounded-lg shadow-lg bg-white md:w-1/2  p-4 flex flex-col gap-2 " action='submit' onChange={handleChange} onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <h1 className="text-xl text-green-600">Add a Book</h1>
          <CgClose
            className="text-red-600 cursor-pointer hover:bg-red-200 rounded-full"
            onClick={() =>
              {closeModal();
              resetForm();}}
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:gap-10">
          <div className="md:w-1/2 w-full">
            <label htmlFor="bookName">Book Name</label>
            <input
              className="w-full outline-gray-100 border border-gray-200 rounded-md pl-2"
              type="text"
              id="bookName"
              name="bookName"
              value={books.bookName}

              placeholder="Enter book name"
            />
            {errors.bookName && <p className="text-red-500">{errors.bookName}</p>}
            <label htmlFor="author">Author Name</label>
            <input
              className="w-full outline-gray-100 border border-gray-200 rounded-md pl-2"
              type="text"
              id="author"
              name="author"
              value={books.author}

              placeholder="Enter author name"
            />
            {errors.author && <p className="text-red-500">{errors.author}</p>}
            <label htmlFor="imageUrl">Image URL</label>
            <input
              className="w-full outline-gray-100 border border-gray-200 rounded-md pl-2"
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={books.imageUrl}

              placeholder="Enter image URL"
            />
            {errors.imageUrl && <p className="text-red-500">{errors.imageUrl}</p>}
            <label htmlFor="price">price</label>
            <input
              className="w-full outline-gray-100 border border-gray-200 rounded-md pl-2"
              type="text"
              id="price"
              name="price"
              value={books.price}

              placeholder="Enter book price"
            />
            {errors.price && <p className="text-red-500">{errors.price}</p>}
          </div>
          <div className="md:w-1/2 w-fll">
            <label htmlFor="publication"> publication</label>
            <input
              className="w-full outline-gray-100 border border-gray-200 rounded-md pl-2"
              type="text"
              id="publication"
              name="publication"
              value={books.publication}

              placeholder="Enter publication name"
            />
            {errors.publication && <p className="text-red-500">{errors.publication}</p>}
            <label htmlFor="rating">Rating</label>
            <input
              className="w-full outline-gray-100 border border-gray-200 rounded-md pl-2"
              type="text"
              id="rating"
              name="rating"
              value={books.rating}

              placeholder="Enter rating"
            />
            {errors.rating && <p className="text-red-500">{errors.rating}</p>}
            <label htmlFor="category">Category</label>
            <input
              className="w-full outline-gray-100 border border-gray-200 rounded-md pl-2"
              type="text"
              id="category"
              name="category"
              value={books.category}

              placeholder="Enter category"
            />
            {errors.category && <p className="text-red-500">{errors.category}</p>}
          </div>
        </div>
        <label htmlFor="bookReview">Book Review</label>
        <input
          className="w-full h-12 outline-gray-100 border border-gray-200 rounded-md pl-2"
          type="text"
          id="bookReview"
          name="bookReview"
          value={books.bookReview}

          placeholder="Enter book review"
        />
        {errors.bookReview && <p className="text-red-500">{errors.bookReview}</p>}
        <button className="bg-green-600 flex justify-center items-center w-full rounded-md" type="submit"
        >Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
