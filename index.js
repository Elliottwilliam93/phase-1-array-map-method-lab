const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(element => {
    let temp = element.split(" ")
    let tempr = [];
    temp.forEach(string => {
      const str = string;
      const str2 = str.charAt(0).toUpperCase() + str.slice(1);
      tempr.push(str2)
    })
    let result = tempr.join(" ")
    return result
 })
}