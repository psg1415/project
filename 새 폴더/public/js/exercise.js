window.onload = function() {
	addItems(1);

	/** 추가 버튼 클릭시 */
	const add = document.querySelector(".add");
	add.addEventListener("click", function(event) {
		addItems();
	});

	/** 삭제 버튼 클릭시 */
	const dels = document.querySelectorAll(".delete");
	const tbody = document.querySelector("thead");
	dels.forEach(function(del) {
		addEventRemoveItems(del);
	});
};

/**
* 항목 삭제 이벤트 핸들러 등록
*
*/
function addEventRemoveItems(el) {
	el.addEventListener("click", function(event) {
		const target = event.target;
		const tr = target.parentElement.parentElement;
		const thead = document.querySelector("thead");
		thead.removeChild(tr);
	});
}

/**
* 입력 항목 추가
*
*/
function addItems(num) {
	num = num || 1; // num 인수가 없으면 기본값은 1
	for (let i = 0; i < num; i++) {
		const tr = document.createElement("tr");
		const td1 = document.createElement("td");
		const td2 = document.createElement("td");
		const td3 = document.createElement("td");
		const td4 = document.createElement("td");

		const input1 = document.createElement("select");
		const input2 = document.createElement("input");
		const input3 = document.createElement("input");

		input1.setAttribute("type", "text");
		input1.setAttribute("name", "name");

		input2.setAttribute("type", "text");
		input2.setAttribute("name", "time");

		input3.setAttribute("type", "text");
		input3.setAttribute("name", "kcal");

		const span = document.createElement("span");
		const text = document.createTextNode("삭제");
		span.appendChild(text);
		span.className = "delete";

		// 새로 추가한 요소는 이벤트 등록 필요
		addEventRemoveItems(span);

		// 운동명옵션추가
		const swim = document.createElement('option');
		const text_swim = document.createTextNode('수영');
		swim.appendChild(text_swim);
		const walk = document.createElement('option');
		const text_walk = document.createTextNode('걷기');
		walk.appendChild(text_walk);
		const hiking = document.createElement('option');
		const text_hiking = document.createTextNode('등산');
		hiking.appendChild(text_hiking);
		const cycle = document.createElement('option');
		const text_cycle = document.createTextNode('자전거');
		cycle.appendChild(text_cycle);
		const step = document.createElement('option');
		const text_step = document.createTextNode('계단');
		step.appendChild(text_step);
		const run = document.createElement('option');
		const text_run = document.createTextNode('달리기');
		run.appendChild(text_run);

		input1.appendChild(swim);
		input1.appendChild(walk);
		input1.appendChild(hiking);
		input1.appendChild(cycle);
		input1.appendChild(step);
		input1.appendChild(run);

		//kcal추가
		const text_kcal = document.createTextNode('kcal');
		td3.appendChild(text_kcal);


		td1.appendChild(input1);
		td2.appendChild(input2);
		td3.appendChild(input3);
		td4.appendChild(span);

		td3.appendChild(text_kcal);

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);

		const thead = document.querySelector("thead");
		thead.appendChild(tr);
	}
}
