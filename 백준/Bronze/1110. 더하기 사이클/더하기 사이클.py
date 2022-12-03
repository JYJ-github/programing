import sys
i = int(sys.stdin.readline())
num = i
N = 0
while True:
    a = num // 10
    b = num % 10
    c = (a + b) % 10
    num = (b * 10) + c
    N += 1
    if num == i:
        break

print(N)