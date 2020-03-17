function basicTeenager(age) {
if (age > 12 && age< 20)
return "You are a teenager!"
}

function teenager(age) {
if (age > 12 && age < 20){
return 'You are a teenager!'
}
else return 'You are not a teenager'
}

function ageChecker(age) {
  if (age < 13 ){
    return 'You are a kid'
  }
  if else (age > 12 && age < 20){
    return 'You are a teenager!'
  }
  if else (age > 19) {
    return 'You are a grownup'
  }

}

function ternaryTeenager(age) {
  if (age > 12 && age < 20){
    return "You are a teenager"
  }
  if else (age < 13 || age > 20) {
    return "You are not a teenager"
  }
}

function switchAge(age) {
if (age > 12 && age < 20){
return "You are a teenager"}
if else (age < 13 || age > 20) {
  return "You have an age"
}
}
