window.onload = function() {
	addItems(1);
	const add = document.getElementsByClassName("add");
	add[0].addEventListener("click", function() {
		addItems();
	});
};

function addItems(num) {
	num = num || 1;
	for(let i = 0; i < num; i++) {
		const tr = document.createElement("tr");
		const tds = [], inputs = [];
		const names = ["time", "name", "kcal"];
		for(let i = 0; i < 4; i++) {
			tds[i] = document.createElement("td");
			if (i == 3) {
				const span = document.createElement("span");
				const text = document.createTextNode("삭제");
				span.appendChild(text);
				span.className = "delete btn";
				addEventRemoveItem(span);
				tds[i].appendChild(span);
			} else {
				inputs[i] = document.createElement("input");
				inputs[i].setAttribute("type", "text");
				inputs[i].setAttribute("name", names[i]);
				tds[i].appendChild(inputs[i]);
			}
			tr.appendChild(tds[i]);
		}
		const thead = document.getElementsByTagName("thead");
        console.log(thead);
		thead[0].appendChild(tr);
	}
}

function addEventRemoveItem(el) {
	el.addEventListener("click", function(e) {
		const target = e.target;
		const tr = target.parentElement.parentElement;
		const thead = tr.parentElement;
		thead.removeChild(tr);
	});
};
