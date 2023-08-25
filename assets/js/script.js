const container = document.getElementById('container');

for(i = 1; i < 101; i++){
    let element = document.createElement('div');
    if(i % 3 == 0 && i % 5 == 0){
        element.innerHTML = 'FizzBuzz';
        element.className = 'cube fizzBuzz';
    } else if(i % 3 == 0){
        element.innerHTML = 'Fizz';
        element.className = 'cube fizz';
    } else if(i % 5 == 0){
        element.innerHTML = 'Buzz';
        element.className = 'cube buzz';
    } else {
        element.innerHTML = i;
        element.className = 'cube i';
    }
    container.append(element);
}
