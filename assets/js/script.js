/*********************Prapti code Starts**********************/
window.onscroll = function () {
    var navbar = document.getElementById("nav");
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// ACTIVATE SEARCH BAR WHEN CLICKED ON SEARCH ICON
document.getElementById('search-bar').addEventListener('click', function (event) {
    event.preventDefault();
    var searchInput = document.getElementById('search-input');
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
});

function searchBooks() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const books = document.querySelectorAll('#book-list .book');
    let firstVisibleBook = null;

    books.forEach(book => {
        const title = book.getAttribute('data-title').toLowerCase();
        const author = book.getAttribute('data-author').toLowerCase();
        const genre = book.getAttribute('data-genre').toLowerCase();

        if (title.includes(query) || author.includes(query) || genre.includes(query)) {
            book.style.display = 'block';
            if (!firstVisibleBook) {
                firstVisibleBook = book;
            }
        } else {
            book.style.display = 'none';
        }
    });

    if (firstVisibleBook) {
        firstVisibleBook.scrollIntoView({ behavior: 'smooth' });
    }
}

document.getElementById('search-bar').addEventListener('input', searchBooks);

document.getElementById('search-bar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBooks();
    }
});
/*********************Prapti code Ends**********************/

/*******************Prajakta code Starts*******************/
const users = [
    { email: "prajakta@e-library.com", password: "prajakta" },
    { email: "p@p", password: "p" },
    { email: "prapti@e-library.com", password: "prapti" },
    { email: "mitali@e-library.com", password: "mitali" }
]; // Array to store users
document.getElementById('buttonUser').style.display = "none";
// Switch to Register Modal
document.getElementById('registerLink').addEventListener('click', function () {
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
    registerModal.show();
});

// Register Form Submission
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('User already exists!');
        return;
    }

    users.push({ email, password });
    alert('Registration successful!');

    const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    registerModal.hide();
    document.getElementById('buttonLogin').style.display = "none";
    document.getElementById('buttonUser').style.display = "block";
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Login successful!');
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        document.getElementById('buttonLogin').style.display = "none";
        document.getElementById('buttonUser').style.display = "block";
    } else {
        alert('Invalid email or password!');
    }
});
/*******************Prajakta code Ends*******************/

/**
 * Resets form fields
 */
function clearForm() {
    document.getElementById('enquiryForm').reset();
};

/**
 * Changes heart icon to solid and back when clicked
 */
document.getElementById('hero-heart').addEventListener('click', function heartClick(event) {
    event.target.classList.toggle('fa-solid');
})