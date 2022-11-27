a, b, c = input().split()
dice = [a, b, c]

if a == b == c:
    print(10000 + int(a)*1000)
elif a == b:
    print(1000 + int(a)*100)
elif a == c:
    print(1000 + int(a) * 100)
elif c == b:
    print(1000 + int(b) * 100)
else:
    print(int(max(dice))*100)