// local reviews data
const arr = [{
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
        occupation: "UI Specialist",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1455103433115-33cd90e2a3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        name: "George M.",
        occupation: "SEO Specialist",
        review: "Dignissimos voluptatum aliquam optio consectetur atque!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni."
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        name: "Elaine Bennes",
        occupation: "HR Recruiter",
        review: "Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni. Dignissimos voluptatum aliquam optio consectetur atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=781&q=80",
        name: "Kosmo Kramer",
        occupation: "Marketing",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim at quam illo dolor itaque tempora quasi adipisci eligendi, architecto sunt vero ullam magni. Dignissimos voluptatum aliquam optio consectetur atque!"
    }
]

// select items
const nameOfUser = document.getElementById("name");
const occupation = document.getElementById("occupation");
const review = document.getElementById("review");

const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const btnRandom = document.getElementById("random");

const css = document.getElementById("circle");
const src = document.getElementById("container");

// set starting item
let currentItem = 0;

//load initial item 
window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
});

// show person based on item
const showPerson = (person) => {
    const item = arr[person];
    css.src = item.image;
    nameOfUser.textContent = item.name;
    occupation.textContent = item.occupation;
    review.textContent = item.review;
}


// show next person
btnRight.addEventListener('click', () => {
    currentItem++;
    if (currentItem > arr.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show previous person
btnLeft.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = arr.length - 1;
    }
    showPerson(currentItem);
});

// show random person
btnRandom.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * arr.length);
    showPerson(currentItem);
})