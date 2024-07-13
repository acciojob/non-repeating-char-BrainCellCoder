function firstNonRepeatedChar(str) {
 // Write your code here
	const countObj={};

	for(let char of str){
		if(countObj.hasOwnProperty(char)){
			countObj[char]++;
		}else{
			countObj[char] = 1;
		}
	}

	for(let char of str){
		if(countObj[char] == 1){
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 




