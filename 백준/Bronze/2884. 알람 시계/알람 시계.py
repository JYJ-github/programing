H, M= map(int, input().split())

if M<45:
    H=H-1
    M=M+15
    if H==-1:
        H=23
        print(H, end= '')
        print(' ', end='')
        print(M)
    else :
        print(H, end= '')
        print(' ', end='')
        print(M)
else :
    M=M-45
    print(H, end= '')
    print(' ', end= '')
    print(M)