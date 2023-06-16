const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const godt = Object.assign({}, employee);
  delete godt[key];
  return godt;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  Object.assign({}, employee);
  delete employee[key];
  return employee;
}