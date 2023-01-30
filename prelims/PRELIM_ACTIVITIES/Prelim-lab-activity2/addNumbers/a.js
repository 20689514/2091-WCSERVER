exports.rate = 300;
exports.tax = 720;
exports.sss = 1200;
exports.pagibig = 300;
exports.phealth = 400;
exports.deductions =
  exports.tax + exports.sss + exports.pagibig + exports.phealth;
exports.grossS = exports.rate * 24;
exports.netS = exports.grossS - exports.deductions;
