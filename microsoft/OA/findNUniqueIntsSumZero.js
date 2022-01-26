/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

n = 0, []
n = 1, [0]
n = 2, [1,-1]
n = 3, [2,0,-2]
n = 4, [-3,-2,2,3]

rule:
arr[i] = i * 2 - n + 1;

*/