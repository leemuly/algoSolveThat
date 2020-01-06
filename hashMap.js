function hashMap(queryType, query) {
  let myHashMap = {};
  queryType.forEach((queryType, queryIdx) => {
      queryHandler(queryType, query[queryIdx], myHashMap);
      console.log(myHashMap);
  })
}

function queryHandler(queryType, query, hashMap){
  switch(queryType){
      case "insert":
          hashMap[query[0]] = query[1];
          break;
      case "get":
          return hashMap[query[0]];
      case "addToKey":
          let newHash = {};
          for(let key in hashMap){
              newHash[Number(key)+1] = hashMap[key];
          }
          hashMap = newHash;
          break;
      case "addToValue":
          for(let key in hashMap){
              hashMap[key] += query[0];
          }
          break;
      default:
          return "invalid query type";
  }
}

console.log(hashMap([],[])); //
