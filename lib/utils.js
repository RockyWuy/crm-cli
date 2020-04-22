/*
 * @Author: rockyWu
 * @Date: 2020-04-22 19:29:56
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-04-22 19:33:59
 */
const chalk = require("chalk");
const tplObj = require("../template.json");

// 获取模板列表
function getTemplateList() {
  Object.entries(tplObj).forEach((item) => {
    let [key, value] = item;
    console.log(chalk.blue(`${key}: ${value}`));
  });
}

module.exports = {
  getTemplateList,
};
