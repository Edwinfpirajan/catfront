interface Cat {
  _id: string;
  name: string;
  age: number;
  breed: string;
  photo: string;
  __v: number;
}

interface CatRequest {
  name: string;
  age: number;
  breed: string;
  photo: string;
}


interface NewCat {
  name: string;
  age: number;
  breed: string;
  photo: string;
}
