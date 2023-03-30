//Some variables did not have an assignment operator
const date = 2050
let status = 'student'
let count = 0

if (date === 2050) {
    //changed count to let as it will have a changing value
    
    //Missing bracket
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
    //created new 'month' variable as date has conflicting uses with global scope
	let month = 'April'
	console.log(month, 'Family Day')
	console.log(month, 'Freedom Day')
    //removed let as it has already been defined
	count = count + 4

	if (status === "student") {
	  console.log('June', 'Youth Day')
      //removed let as it has already been defined
	    count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
    //changed date to month
	month = 'December'
	console.log(month, 'Day of Reconciliation')
    //removed let as it has already been defined
	count = count + 3

	if (status === "parent") {
        //changed date to month
	  console.log(month, 'Christmas Day')
      //removed let, already declared
	    count = count + 1
  }
    //changed date to month
	console.log(month, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)