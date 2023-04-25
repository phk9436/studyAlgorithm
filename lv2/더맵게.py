import heapq

def solution(scoville, K):
  answer = 0
  heapq.heapify(scoville)
  while scoville[0] < K:
    if len(scoville) < 2:
      answer = -1
      break
    current = heapq.heappop(scoville)
    nextCurrent = heapq.heappop(scoville)
    heapq.heappush(scoville, current + nextCurrent*2)
    answer += 1
  return answer
