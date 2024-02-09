public class Fibonacci
{
    public static int fib(int n)
    {
        int a = 0;
        int b = 1;
        
        for (int i = 0; i < n; i++)
        {
          int temp = a;
          a = b;
          b = temp + a;
        }
        
        return a;
    }
}

/*function Fibonacci(fib){
    let akt = 0;
    let kov = 1;
    let kov2 = empty();
    
    return fib(n-1);
  }
  

module Fibonacci (fib) where

fib :: Int -> Int
fib n = undefined

akt = 0;
kov = 1;
akt = kov;
kov = akt+kov;

return fib(n-1);*/