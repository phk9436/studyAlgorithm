function solution(my_string, overwrite_string, s) {
  var answer = '';
  const arr1 = [...my_string].splice(0, s);
  const arr2 = [...my_string].splice(s + overwrite_string.length, my_string.length);
  answer = `${arr1.join("")}${overwrite_string}${arr2.join("")}`;
  return answer;
}