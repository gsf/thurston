Thurston
========
Thurston is a programming language.

Examples
--------
    x: 1
    y: 3
    a: (x + y) / 2
    z: (x, y) {return x+y}
    n: z(a, y)
    q: n = 5  // q is true
    
    anArray: [
      'bunnies', 
      'kittens', 
      'puppies',
    ]
    aString: ''
    for index, cuteThings in anArray {
      aString.push(index)
      aString.push(cuteThings)
    }  // now aString is '0bunnies1kittens2puppies' 

    anObject: {
      art: 'power',
      money: (love) {
        return love / 2
      },
    }
    aFunction: () {
      console.log('In aFunction')
    }


    http: require('http')

    http.createServer((request, response) {
      response.writeHead(200, {'Content-Type': 'text/plain'})
      response.end('Hello World\n')
    }).listen(8124, () {
      console.log('Listening at http://127.0.0.1:8124/')
    })


    get: (obj, key) {
      accessor: key.split('.')
      for i in accessor {
        if !obj {return ''}
        obj: obj[accessor[i]]
      }
      return obj || ''
    }
