const checkSingleProp = require("./checkSingleProp");

class Validate {
  constructor(scheam, rules) {
    this.scheam = scheam;
    this.rules = rules;
  }
}

/**
 * @param {*} rules
 */
function checkRules(checkParams, rules) {
  let checkParamsKeys = Object.keys(checkParams);
  let rulesKesy = Object.keys(rules);

  console.log(checkParamsKeys, rulesKesy);
  return new Promise((resolve, reject) => {
    checkParamsKeys.forEach(prop => {
      if (rules[prop]) {
        checkSingleProp(checkParams[prop], rules[prop]);
      }
    });
  });
}

let testPa = {
  userName: "zhu",
  password: "1222222"
};

let testPaRules = {
  userName: {
    type: String,
    required: true,
    errmsg: '请填写用户名'
  },
  password: {
    type: Number,
    length: {
      min: 6,
      max: 16
    },
    required: true,
    errmsg: '请填写用户密码'
  }
};

checkRules(testPa, testPaRules);
