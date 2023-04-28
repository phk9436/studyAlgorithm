import itertools

def solution(k, dungeons):
    perm = list(itertools.permutations(dungeons))
    arr = []
    for i in perm:
      pirodo = k
      clear = 0
      for need, spend in i:
        if pirodo >= need:
          pirodo -= spend
          clear += 1
      arr.append(clear)
    return max(arr)