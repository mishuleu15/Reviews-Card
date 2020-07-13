const arr = [
    {
        id: 1,
        name: "John Connor",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        occupation: "Web developer",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni. Dignissimos voluptatum aliquam optio consectetur atque!"
    },
    {
        id: 2,
        name: "Marry Ann",
        image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        occupation: "Chief Editor",
        review: "Dignissimos voluptatum aliquam optio consectetur atque!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni. "
    },
    {
        id: 3,
        name: "Johny Cage",
        image: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2012&q=80",
        occupation: "Data Scientist",
        review: "Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni. Dignissimos voluptatum aliquam optio consectetur atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1483995564125-85915c11dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=852&q=80",
        name: "Al Bundy",
        occupation: "Web designer",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1455103433115-33cd90e2a3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        name: "George M.",
        occupation: "Web designer",
        review: "Dignissimos voluptatum aliquam optio consectetur atque!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni."
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        name: "Elaine Bennes",
        occupation: "Web designer",
        review: "Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni. Dignissimos voluptatum aliquam optio consectetur atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=781&q=80",
        name: "Kosmo Kramer",
        occupation: "Web designer",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni. Dignissimos voluptatum aliquam optio consectetur atque!"
    }
]

const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const btnRandom = document.getElementById("random");
const css = document.getElementById("circle");
const nameOfUser = document.getElementById("name");
const occupation = document.getElementById("occupation");
const review = document.getElementById("review");
const src = document.getElementById("container");

let increase = arr[0].id - 1;
let decrease = arr[0].id + 6;


const increaseNumber = () => {
    increase = increase + 1;
    if (increase == 7) {
        increase = arr[0].id - 1;
    }
}

const decreaseNumber = () => {
    decrease = decrease - 1;
    if (decrease == -1) {
        decrease = arr[0].id + 5;
    }
}
const randomize = () => {
      const randomize =  Math.floor(Math.random() *arr.length);
      const userName = arr[randomize].name;
      const userImg = arr[randomize].image;
      const userOcupation = arr[randomize].occupation;
      const userReview = arr[randomize].review;

      nameOfUser.textContent = userName;
      css.src = userImg;
      occupation.textContent = userOcupation;
      review.textContent = userReview;
      
}

const left = () => {
      decreaseNumber();
      const userName = arr[decrease].name;
      const userImg = arr[decrease].image;
      const userOcupation = arr[decrease].occupation;
      const userReview = arr[decrease].review;

      nameOfUser.textContent = userName;
      css.src = userImg;
      occupation.textContent = userOcupation;
      review.textContent = userReview;
}

const right = () => {
    increaseNumber();
    const userName = arr[increase].name;
    const userImg = arr[increase].image;
    const userOcupation = arr[increase].occupation;
    const userReview = arr[increase].review;

    nameOfUser.textContent = userName;
    css.src = userImg;
    occupation.textContent = userOcupation;
    review.textContent = userReview;
}

btnLeft.addEventListener("click", left);
btnRight.addEventListener("click", right);
btnRandom.addEventListener("click", randomize)

