const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const fruitSet = new Set(fruit)
const fruitMap = new Map([...fruitSet].map((name)=>{
	return [name, [...name]]
}))



function search(str) {
	let results = [];
	[...fruitSet].filter((name)=>{
		if(name.toLowerCase().includes(str.toLowerCase())){
			results.push(name)
		}
	})

	// TODO

	return results;
}

function searchHandler(e) {
	// TODO
	showSuggestions(search(e.target.value), e.target.value);
	
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ''

	if(!inputVal){
		return
	}
	else{results.map((fruit)=>{
			suggestions.classList.add('has-suggestions')
			let fruitData = fruitMap.get(fruit);
			let newSuggestion = document.createElement('li');
			newSuggestion.addEventListener('click', useSuggestion);
			newSuggestion.setAttribute('fruit',fruit);
			fruitData.map((letter)=>{
				let newLetter = document.createElement('span');
				newLetter.style.pointerEvents = 'none';
				if(inputVal.toLowerCase().includes(letter.toLowerCase())){
					newLetter.style.fontWeight = 'bold';
					
				}
				newLetter.innerText = letter
				newSuggestion.append(newLetter)
			})
			suggestions.append(newSuggestion)
			
			return 
		})}
	
		
	// TODO
}

function useSuggestion(e) {
	// TODO
	suggestions.classList.remove('has-suggestions')
	input.value = e.target.getAttribute('fruit')
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);