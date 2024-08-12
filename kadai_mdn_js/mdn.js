const today = new Date();

const [year, month, day] = [
  today.getFullYear() + '年',
  today.getMonth() + 1 + '月',
  today.getDate() + '日',
];

console.log (year, month, day);