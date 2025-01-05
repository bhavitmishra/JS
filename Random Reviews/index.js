const users = [
  {
    name: "Emily Whitmen",
    role: "UI/UX Developer",
    review:
      "Emily excels at creating user-friendly interfaces with a clean design aesthetic.",
    image: "./assets/3.jpg",
  },
  {
    name: "John Doe",
    role: "Backend Developer",
    review:
      "John's problem-solving skills and backend expertise have been invaluable to our projects.",
    image: "./assets/4.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    review:
      "Sarah is a great leader, ensuring projects are delivered on time and exceed expectations.",
    image: "./assets/1.jpg",
  },
  {
    name: "Michael Brown",
    role: "Frontend Developer",
    review:
      "Michael has a talent for building visually stunning and responsive web applications.",
    image: "./assets/2.jpg",
  },
  {
    name: "Anna Smith",
    role: "Quality Assurance Engineer",
    review:
      "Anna ensures every release meets the highest standards of quality and performance.",
    image: "./assets/1.jpg",
  },
];

let i = 0;

document.addEventListener("DOMContentLoaded", () => {
  const left = document.querySelector(".larrow");
  const right = document.querySelector(".rarrow");
  const namee = document.querySelector(".cname");
  const role = document.querySelector(".crole");
  const review = document.querySelector(".creview");
  const img = document.querySelector("#image");
  const surp = document.querySelector(".randarrow");
  function update() {
    img.src = users[i].image;
    namee.innerHTML = users[i].name;
    role.innerHTML = users[i].role;
    review.innerHTML = users[i].review;
  }

  update();
  right.addEventListener("click", (e) => {
    e.preventDefault();
    i = (i + 1) % users.length;
    update();
  });
  left.addEventListener("click", (e) => {
    e.preventDefault();
    i = (i - 1 + users.length) % users.length;
    update();
  });
  surp.addEventListener("click", () => {
    const ran = Math.floor(Math.random() * 4);
    img.src = users[ran].image;
    namee.innerHTML = users[ran].name;
    role.innerHTML = users[ran].role;
    review.innerHTML = users[ran].review;
    i = ran;
  });
});
