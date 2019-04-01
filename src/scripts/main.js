const container = document.querySelector("#output")

const customerEmailArray = []

let customerEmailAddresses = customers.forEach((customer) => {
  customer.contacts.email.map((email) => customerEmailArray.push(email))
})

console.log(customerEmailArray)

const emailArray = customerEmailArray.forEach(customer =>  
  container.innerHTML += `
      <p>${customer}</p>
      `)


