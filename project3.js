function calculator(){
    var year
    var month
     var day
   let currentDate = parseInt(cd.value.slice(8,10),10)
let currentMonth = parseInt(cd.value.slice(5,7),10)
let currentYear = parseInt(cd.value.slice(0,4),10) 
console.log("current date:-",currentYear,currentMonth,currentDate)
let birthDate = parseInt(dob.value.slice(8,10),10)
let birthMonth = parseInt(dob.value.slice(5,7),10)
let birthtYear = parseInt(dob.value.slice(0,4),10) 
console.log("birth date:-",birthtYear,birthMonth,birthDate)
if(currentDate>=birthDate){
    day=currentDate-birthDate
    console.log(day)
}
else{
   day= currentDate + new Date(currentYear,currentMonth).getDate()-birthDate
currentMonth--
console.log(day)}
if(currentMonth>=birthMonth){
    month=currentMonth-birthMonth
    console.log(month)
}
else{
    month=currentMonth+12-birthMonth
   currentYear--
   console.log(month)
}
year= currentYear-birthtYear
console.log(year)
if(year<0){
    ageText.innerHTML ="what a joke! give correct age"
    console.log("what a joke! give correct age")
}
else{
    ageText.innerHTML = year + " year "+month+" month "+day+" day"
    console.log( year + " year "+month+" month "+day+"day")
}
}
