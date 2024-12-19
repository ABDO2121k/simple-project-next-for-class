export type Book = {
    id: string;
    title: string;
    author: string;
    year: number;
    genre: string;
    imageUrl: string;
    resumer: string;
  }
  
  export type BookCardProps = {
    book: Book;
  }