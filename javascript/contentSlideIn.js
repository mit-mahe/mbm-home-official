const allcontent = document.querySelectorAll(".content");

const contentObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		}
	});
});

allcontent.forEach((item) => contentObserver.observe(item));
