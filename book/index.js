const BOOKS = [
  {
    pdf: "./1.pdf",
    img: "./1.png",
    name: "JavaScript设计模式与开发实践"
  },
  {
    pdf: "./2.pdf",
    img: "./2.png",
    name: "啊哈!算法"
  },
  {
    pdf: "./3.pdf",
    img: "./3.png",
    name: "深入REACT技术栈"
  },
  {
    pdf: "./4.pdf",
    img: "./4.png",
    name: "深入浅出webpack"
  },
  {
    pdf: "./5.pdf",
    img: "./5.png",
    name: "你不知道的JavaScript(上)"
  },
  {
    pdf: "./6.pdf",
    img: "./6.png",
    name: "你不知道的JavaScript(中)"
  },
  {
    pdf: "./7.pdf",
    img: "./7.png",
    name: "你不知道的JavaScript(下)"
  },
  {
    pdf: "./8.pdf",
    img: "./8.png",
    name: "类型和程序设计语言"
  }
];
const wrap = document.getElementById("wrap");
// 渲染页面
function render(books) {
  wrap.innerHTML = '';
  for (let i = 0; i < books.length; i++) {
    const { pdf, img, name } = books[i];
    let book = document.createElement("a");
    book.href = pdf;
    book.classList.add('book');
    let bookImg = new Image();
    bookImg.src = img;
    bookImg.classList.add('book-img');
    let bookName = document.createTextNode(name);
    book.appendChild(bookImg);
    book.appendChild(bookName);
    wrap.appendChild(book);
  }
}
render(BOOKS);

// 搜索
document.getElementById('search-input').addEventListener('input', function(e) {
  let value =  e.target.value
  let books = BOOKS.filter((item) => item.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1)
  render(books)
});
