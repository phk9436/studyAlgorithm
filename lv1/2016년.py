import datetime

def solution(a, b):
    days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    week = datetime.date(2016, a, b).weekday()
    return days[week]