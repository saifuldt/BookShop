import { useEffect, useState, useMemo } from 'react';
import Header from './Header';
import { getBookFromLocalStorge, getThemeFromLocalStorge } from './localStoreg';
import AddBook from './AddBook';
import BookDetails from './BookDetails';


const Layout = () => {
  const [books, setBooks] = useState(getBookFromLocalStorge());
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const [theme, setTheme] = useState(getThemeFromLocalStorge());
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  };

  const [searchTerm, setSearchTerm] = useState("");
  function handleSearch(event) {
    const value = event.target.value;
    setSearchTerm(value);
    console.log("Search Term:", value);
  }

const displayedBook = useMemo(() => 
  books.filter(
    (book) =>
      book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  ), [books, searchTerm]);


  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const [isModal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false)
  };

  const handleDeleteBook = (bookId) => {
    const bookAfterDelet = books.filter((book) => book.id !== bookId);
    setBooks(bookAfterDelet);
  };




  return (
    <div className="flex flex-col ">
      <Header
        openModal={openModal}
        toggleTheme={toggleTheme}
        theme={theme}
        searchTerm={searchTerm}
        handleSearch={handleSearch} />
      <BookDetails
        searchTerm={searchTerm}
        displayedBook={displayedBook}
        handleDeleteBook={handleDeleteBook}
        books={books}
        setBooks={setBooks} />
      {isModal && (<AddBook
        closeModal={closeModal}
        handleAddBook={handleAddBook} />)}


    </div>
  );
};

export default Layout;
