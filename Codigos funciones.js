			function Paralellum(array) {
				if (array.x !== 0 && array.y === 0 && array.z === 0) {
				  return true;
				}
			  
				if (array.x === 0 && array.y !== 0 && array.z === 0) {
				  return true;
				}
			  
				if (array.x === 0 && array.y === 0 && array.z !== 0) {
				  return true;
				}
			  
				return false;
			  }

			  function ordenatio(array) {
				minus = array[0];
				for (i = 1; i < array.length; i++) { 
				  if (array[i] < minus) {
					minus = array[i];
				  }
				}
				return minus;
			  }