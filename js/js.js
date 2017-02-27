var n = Number(prompt('Please enter the sequence number of Fibonacci numbers'));
     var numbersFibonacci = [];
      numbersFibonacci[0]=1;
      numbersFibonacci[1]=1;
      numbersFibonacci[2]=2;
    for (var i=3; i<=n; i++) {
      numbersFibonacci[i] = numbersFibonacci[i-1] + numbersFibonacci[i-2];
      var fib = numbersFibonacci[i];
      }
    numbersFibonacci.push = fib;
    document.write(numbersFibonacci[n-1]);

