num = int(input())
res = ""

if ((num % 2) != 0):
   res = "NO" 

else: 
    if ((num-2)%2 == 0) & (num != 2) :
        res = "YES"

    else: res = "NO"
print(res)