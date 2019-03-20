const Validators = require("./validators");

module.exports = (value, rules) => {
  const rulesKeys = Object.keys(rules);
  if(rules.required){
    rulesKeys.forEach(ruleKey => {
      if (Validators[ruleKey]) {
        console.log(Validators[ruleKey](value,this,rules[ruleKey]));
      }
    });
    return Validators[ruleKey](value,this,rules[ruleKey])
  }else{
    if(value){
      //如果非必须，但是有值检查
      return Validators[ruleKey](value,this,rules[ruleKey])
    }
    return true
  }
  
};
  