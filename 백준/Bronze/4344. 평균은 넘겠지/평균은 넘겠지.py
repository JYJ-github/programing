import sys
C = int(sys.stdin.readline())
for i in range(C):
    sco = list(map(int, sys.stdin.readline().split()))
    avg = sum(sco[1:])/sco[0]
    a = 0
    for j in sco[1:]:
        if j > avg:
            a += 1
    per = a/sco[0]*100
    print(f'{per:.3f}%')