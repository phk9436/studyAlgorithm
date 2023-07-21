def solution(n, arr1, arr2):
    for index, el in enumerate(arr1):
      bin = format(el, 'b').zfill(n)
      arr1[index] = bin
    for index, el in enumerate(arr2):
      bin = format(el, 'b').zfill(n)
      arr2[index] = bin

    map = []
    for arrIndex, arrEl in enumerate(arr1):
      res = ''
      for elIndex, elEl in enumerate(arrEl):
        if elEl == '1' or arr2[arrIndex][elIndex] == '1' :
          res+="#"
        else:
          res+=" "
      map.append(res)
    answer = map
    return answer