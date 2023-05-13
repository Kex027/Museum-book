import style from '../styles/book.module.scss'

const Book = ({ data }) => {
    return (
    <div className={style.container}>
        <div className={style.book}>
          <img src="/book.png" alt="Book" />
        </div>
    </div>);
  };
  
  export default Book;