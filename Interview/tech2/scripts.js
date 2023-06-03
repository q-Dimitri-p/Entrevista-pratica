let products = [];

function addConsumer() {
    let product = document.getElementById('productInput').value;
    let price = parseFloat(document.getElementById('priceInput').value);
    let consumers = document.getElementById('consumersInput').value.split(',');

    products.push({ product, price, consumers });

    document.getElementById('productInput').value = '';
    document.getElementById('priceInput').value = '';
    document.getElementById('consumersInput').value = '';
}

function calculateBill() {
    let billTable = document.getElementById('billTable');
    billTable.innerHTML = '';

    for (let product of products) {
        let consumers = product.consumers.map(consumer => consumer.trim());
        let numConsumers = consumers.length;
        let individualPrice = product.price / numConsumers;
        let serviceCharge = individualPrice * 0.1;

        for (let consumer of consumers) {
            let row = document.createElement('tr');

            let consumerCell = document.createElement('td');
            consumerCell.textContent = consumer;
            row.appendChild(consumerCell);

            let consumedAmountCell = document.createElement('td');
            consumedAmountCell.textContent = individualPrice.toFixed(2);
            row.appendChild(consumedAmountCell);

            let serviceChargeCell = document.createElement('td');
            serviceChargeCell.textContent = serviceCharge.toFixed(2);
            row.appendChild(serviceChargeCell);

            let totalAmountCell = document.createElement('td');
            let totalAmount = individualPrice + serviceCharge;
            totalAmountCell.textContent = totalAmount.toFixed(2);
            row.appendChild(totalAmountCell);

            billTable.appendChild(row);
        }
    }
}