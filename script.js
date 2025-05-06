var icon = document.getElementById("icon");
			icon.onclick = function () {
				document.body.classList.toggle("dark-theme");
				if (document.body.classList.contains("dark-theme")) {
					icon.src = "/images/bxs-moon.svg";
				} else {
					icon.src = "/images/brightness-high-fill.svg";
				}
			};
