const allcontent = document.querySelectorAll(".content");

const contentObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

allcontent.forEach((item) => contentObserver.observe(item));
