
// Задание 6

	const arr = ["мы", "все", "не похожи"];
	let isEquel = false;
		for (let i = 0; i > arr.length; i++) {
			if (arr[i] === arr[i + 1]){
				isEquel = true
			}
		}
			if (isEquel){
			console.log("В массиве есть повторяющиеся эл-ты")
			} else {
			console.log("В массиве не найдено повторяющихся эт-ов")
			}	