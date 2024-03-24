x=int(input())
sum=0
for i in range(x):
    sum+=x%10
    x//=10
print(sum)