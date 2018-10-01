//https://www.codewars.com/kata/one-line-task-circle-intersection/javascript
with(Math)circleIntersection=([a,b],[c,d],r)=>(-sin(x=2*acos(hypot(a-c,b-d)/2/r))+x)*r*r|0