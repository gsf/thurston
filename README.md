Thurston
========
Thurston is a programming language.

Examples
--------
    x = 1
    y = 3
    a = (x + y) / 2
    z = (x, y) {return x+y}
    n = z(a, y) // n is now equal to 5
    list = [
      'bunnies', 
      'kittens', 
      'puppies',
    ]
    dict = {
      art: 'power',
      money: (love) {
        return love / 2
      },
    }
    d = () {
      console.log('In function d')
    }


    http = require('http')

    http.createServer((request, response) {
      response.writeHead(200, {'Content-Type': 'text/plain'})
      response.end('Hello World\n')
    }).listen(8124)

    console.log('Server running at http://127.0.0.1:8124/')


    get = (obj, key) {
      accessor = key.split('.')
      for i in accessor {
        if !obj {return ''}
        obj = obj[accessor[i]]
      }
      return obj || ''
    }
