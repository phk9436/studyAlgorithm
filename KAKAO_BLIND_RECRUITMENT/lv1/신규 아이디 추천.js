function solution(new_id) {
  const str1 = new_id.toLowerCase();
  const str2 = [...str1].filter((e) => {
      if(/[a-z0-9]/.test(e)) return true;
      if(e === '-' || e === '_' || e ==='.') return true;
      return false;
  });
  const str3 = str2.filter((e, i) => {
      if(e !== ".") return true;
      if(str2[i + 1] !== ".") return true;
  })
  let str4 = str3.filter((e, i) => {
      if(i === 0 || i === str3.length - 1) {
          if(e === ".") return false;
      }
      return true;
  })
  if(str4.length === 0)  str4 = ["a"];
  if(str4.length >= 16) {
      str4 = str4.slice(0, 15);
      if(str4.at(-1) === ".") str4.pop();
  }
  if(str4.length <= 2) {
      while(str4.length < 3) {
          str4.push(str4.at(-1));
      } 
  }
  return str4.join("")
}