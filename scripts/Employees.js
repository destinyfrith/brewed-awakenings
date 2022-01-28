import { getEmployees, getOrders } from "./database.js"
import { Orders } from "./Orders.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

// Define a function employeeOrders that returns how many orders were fulfilled

const employeeOrders = (employee, orders) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            // Increment the number of fulfilled orders
            fulfilledOrders++
        }
    }

    return fulfilledOrders
}

// needs if statement to match employee.id to product.employeeid

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders(employee, orders)

                    window.alert(`${employee.name} sold ${orderCount} products`)
                }
            }
        }
    }
)