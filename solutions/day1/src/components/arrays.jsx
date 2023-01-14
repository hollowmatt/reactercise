export function Arrays() {
    const ary = ['Catnip', 'Bella', 'Milkshake', 'Shivers'];
    const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
    const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
    const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
    const frontEnd = ['CSS', 'JS', 'HTML', 'React'];
    const backEnd = ['Node', 'Java'];
    const database = ['MongoDB', 'CouchDB', 'MySQL'];
    const fullstack = [frontEnd, backEnd, database];
    const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
    
    const phrase = "Catnip is a bad cat!";
    //create arrays using split
    const wordsInPhrase = phrase.split(" ");
    const charsInPhrase = phrase.split("");
    const staticFill = Array(6).fill('-');
    const fruitsAndVeggies = fruits.concat(vegetables);
  
    //output of exercises
    console.log(ary.length);
    console.log(ary.toString());
    console.log(wordsInPhrase);
    console.log(charsInPhrase);
    console.log(wordsInPhrase[0]);
    console.log(wordsInPhrase[0]='Milkshake');
    console.log(wordsInPhrase);  
    console.log(staticFill);
    console.log(fruitsAndVeggies);
    console.log(fruitsAndVeggies.includes('fudge'));
    console.log(numbers.slice(1, 4));
    console.log(fruitsAndVeggies.push('turnip'));
    console.log(fruitsAndVeggies);
    fruitsAndVeggies.pop();
    console.log(fruitsAndVeggies);
    fruitsAndVeggies.shift();
    console.log(fruitsAndVeggies);
    fruitsAndVeggies.unshift('banana');
    console.log(fruitsAndVeggies);
    console.log(fullstack);
    console.log(fullstack[1]);
    console.log(fullstack[1][1]);

    return(
        <div>
            <h2>This is the array</h2>
            <p>
                {ary.sort().join(', ')}
            </p>
        </div>
    );
}
