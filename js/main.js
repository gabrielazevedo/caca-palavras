(function(){
	'use strict';

	var $form = document.querySelector('[data-js="form"]');
	var $search = document.querySelector('[data-js="search"]');
	var $tbody = document.querySelector('[data-js="tbody"]');

	function getIndex(name){
		if(gameWords.indexOf(name) > -1){
			var i = gameWords.indexOf(name);
			return indexes[i];
		}
		
		$search.value = '';
		return false;
	}

	function selectTd( line , column ){
		var tr = $tbody.children[line];
		var td = tr.children[column];
		td.classList.add("color");
		$search.value = '';
	}

	var letters = [
		['w','s','i','a','l','c','e','o','i','v'],
		['v','a','l','p','a','l','h','e','t','a'],
		['u','t','i','g','u','a','n','a','o','i'],
		['u','c','i','f','r','a','c','l','u','b'],
		['a','l','c','o','g','e','e','u','v','r'],
		['m','u','s','i','c','a','t','l','a','a'],
		['a','b','i','s','s','n','o','r','i','s'],
		['n','p','a','l','c','o','a','h','b','e'],
		['z','m','p','t','r','e','s','j','r','l'],
		['f','p','e',"q",'t','a','m','l','o','j']
	];

	var lines = [];

	letters.map(function(item, index){
		lines[index] = document.querySelector('[data-js="line'+ index +'"]');
	});

	letters.forEach(function(item, index){
		letters[index].forEach(function(item){
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
		});
	});

	var indexes = [ 
		[ [1,3], [1,4], [1,5], [1,6], [1, 7], [1,8], [1, 9] ],
		[ [3,8], [4,8], [5,8] ],
		[ [0,9], [1,9], [2,9], [3,9], [4,9], [5,9], [6,9], [7,9], [8,9] ],
		[ [2,2], [2,3], [2,4], [2,5], [2,6], [2,7] ],
		[ [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9] ],
		[ [5,0], [5,1], [5,2], [5,3], [5,4], [5,5] ],
		[ [7,1], [7,2], [7,3], [7,4], [7,5] ],
		[ [8,3], [8,4], [8,5], [8,6] ],
		[ [5,7], [4,7], [3,7], [2,7] ],
		[ [0,5], [0,6], [0,7] ],
		[ [4,8], [5,8], [6,8] ],
		[ [2,1], [3,2], [4,3] ],
		[ [4,2], [5,3], [6,4], [7,5] ],
		[ [8,2], [7,2], [6,2], [5,2] ],
		[[4,9], [3,8], [2,7]]
	]
	var gameWords = ['palheta','uva','vaibrasel','iguana','cifraclub', 'musica', 'palco', 'tres','lula', 'ceo', 'vai','tio', 'ciso', 'pais', 'rua' ];

	$form.addEventListener('submit', function(event){
		event.preventDefault();
		var valueSearch = $search.value;
		var getIndexes = getIndex(valueSearch);
		for(var i = 0; i < getIndexes.length; i++){
			selectTd(getIndexes[i][0], getIndexes[i][1])
		}
	}, false);

}) ();