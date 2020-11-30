let guid = 0
function genTree(level=1,max=3) {
  let result = []
  console.log(level,max)
  for(let i =0; i<5;i++){
    guid+=1
    var obj = {
      a:'1',
      id:guid,
      level:level
    }
    if(level<max){
      obj.children = genTree(level+1,max)
    }
    

    result.push(obj)
  }

  return result
}

console.log(genTree(1,5))