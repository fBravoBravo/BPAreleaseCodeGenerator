#!/usr/bin/env node

const commitCode = process.argv[2];

const formattedDate = getFormattedDate();
const formattedTime = getFormattedTime();
console.log(`BPA ${formattedDate}-${formattedTime}-UTC-${process.argv[2]}`);

function getFormattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
  let day = String(today.getDate()).padStart(2, "0"); // Add leading zero for single-digit days

  return `${year}.${month}.${day}`;
}


function getFormattedTime() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  return `${hours}.${minutes}.${seconds}`;
}
