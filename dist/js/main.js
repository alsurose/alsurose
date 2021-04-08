const booking = () => {
  const month = new Array();

  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  const time = new Date();
  let m = time.getMonth();
  let y = time.getFullYear();
  let mFinal = 0;
  // const d = time.getDate();

  let message = '';

  const overOctober = () => {
    m = m - 10;
    mFinal = month[m];
    // y++;
    // console.log("case1 -- month:" + mFinal.slice(0, 3), 'year:' + y);
    return message = `${mFinal.slice(0, 3)} ${y++}`;
  }

  const normalMonth = () => {
    mFinal = month[m + 2];
    // console.log("case3 -- month:" + mFinal.slice(0, 3), 'year:' + y);
    return message = `${mFinal.slice(0, 3)} ${y}`;
  }
  
  const book = m >= 9 ? overOctober() : normalMonth();
  // const text = document.getElementById('booking');
  // text.text(booking);
  // console.log(book);
  return book;
}

// booking();
// const text = document.getElementById('booking').innerHTML = booking();
// console.log(text);

// text.innerHTML(booking);

const container = document.body
const itemsWrapper = document.querySelector('.grid')

// Preload images
const preloadImages = () => {
  return new Promise((resolve, reject) => {
    imagesLoaded(document.querySelectorAll('img'), resolve);
  });
};
// And then..
preloadImages().then(() => {
  // Remove the loader
  document.body.classList.remove('loading');
  const effect = new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 })
});