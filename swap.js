const pages = {
	home: 'index.html',
	televisions: 'televisions.html',
	about: 'about_us.html'
};

function swapPage(event) {
	const page = event.currentTarget.dataset.page;

	if (!pages[page]) {
		return;
	}

	event.preventDefault();
	window.location.href = pages[page];
}

document.querySelectorAll('[data-page]').forEach((link) => {
	link.addEventListener('click', swapPage);
});

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.top-nav a').forEach((link) => {
	if (pages[link.dataset.page] === currentPage) {
		link.classList.add('active');
		link.setAttribute('aria-current', 'page');
	}
});
