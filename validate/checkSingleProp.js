const Validators = require("./validators");

module.exports = (value, rules) => {
  let rulesKeys = Object.keys(rules);
  rulesKeys.forEach(ruleKey => {
    console.log(ruleKey, rules[ruleKey]);
    if (Validators[ruleKey]) {
      console.log(Validators[ruleKey](value,this,rules[ruleKey]));
    }
  });
};
  