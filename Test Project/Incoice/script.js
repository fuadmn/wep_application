
        const description =
            document.getElementById("description");

        const quantity =
            document.getElementById("quantity");

        const price =
            document.getElementById("price");

        const rest =
            document.getElementById("rest");

        const discount =
            document.getElementById("discount");


        // ================================
        // BUTTONS
        // ================================

        const saveBtn =
            document.getElementById("saveBtn");

        const cancelBtn =
            document.getElementById("cancelBtn");

        const downloadExcelBtn =
            document.getElementById("downloadExcelBtn");


        // ================================
        // TABLE
        // ================================

        const tableBody =
            document.getElementById("tableBody");

        const emptyMessage =
            document.getElementById("emptyMessage");


        // ================================
        // SUMMARY
        // ================================

        const totalElement =
            document.getElementById("total");

        const restElement =
            document.getElementById("restTotal");

        const discountElement =
            document.getElementById("discountTotal");

        const paymentElement =
            document.getElementById("payment");


        // ================================
        // PRODUCTS ARRAY
        // ================================

        let products = [];


        // ================================
        // DATE AND TIME
        // ================================

        function updateDateTime() {

            const now = new Date();


            const dateOptions = {

                weekday: "long",

                year: "numeric",

                month: "long",

                day: "numeric"

            };


            const timeOptions = {

                hour: "2-digit",

                minute: "2-digit",

                second: "2-digit",

                hour12: true

            };


            document.getElementById(
                "invoiceDate"
            ).textContent =
                now.toLocaleDateString(
                    "en-US",
                    dateOptions
                );


            document.getElementById(
                "invoiceTime"
            ).textContent =
                now.toLocaleTimeString(
                    "en-US",
                    timeOptions
                );

        }


        // Update time immediately
        updateDateTime();


        // Update every second
        setInterval(
            updateDateTime,
            1000
        );


        // ================================
        // SAVE PRODUCT
        // ================================

        saveBtn.addEventListener(
            "click",
            function () {

                const name =
                    description.value.trim();


                const qty =
                    Number(quantity.value);


                const productPrice =
                    Number(price.value);


                // Validate inputs
                if (

                    name === "" ||

                    quantity.value === "" ||

                    price.value === "" ||

                    qty <= 0 ||

                    productPrice <= 0

                ) {

                    alert(
                        "Fadlan buuxi Description, Quantity iyo Price!"
                    );

                    return;

                }


                // Calculate amount
                const amount =
                    qty * productPrice;


                // Add product
                products.push({

                    name: name,

                    quantity: qty,

                    price: productPrice,

                    amount: amount

                });


                // Update invoice
                updateInvoice();


                // Clear inputs
                description.value = "";

                quantity.value = "";

                price.value = "";


                // Focus input
                description.focus();

            }
        );


        // ================================
        // UPDATE INVOICE
        // ================================

        function updateInvoice() {


            // Clear table
            tableBody.innerHTML = "";


            let total = 0;


            // Empty message
            if (products.length === 0) {

                emptyMessage.style.display =
                    "block";

            } else {

                emptyMessage.style.display =
                    "none";

            }


            // Add products to table
            products.forEach(
                function (product, index) {

                    total += product.amount;


                    const row = `

                        <tr class="transition hover:bg-slate-50">

                            <td class="p-3 text-center">

                                ${index + 1}

                            </td>


                            <td class="p-3 font-medium">

                                ${product.name}

                            </td>


                            <td class="p-3 text-center">

                                ${product.quantity}

                            </td>


                            <td class="p-3 text-right">

                                $${product.price.toFixed(2)}

                            </td>


                            <td class="p-3 text-right font-semibold">

                                $${product.amount.toFixed(2)}

                            </td>

                        </tr>

                    `;


                    tableBody.innerHTML += row;

                }
            );


            // Rest value
            const restValue =
                Number(rest.value) || 0;


            // Discount value
            const discountValue =
                Number(discount.value) || 0;


            /*
                Payment Calculation

                Total + Rest - Discount
            */

            const payment =
                total +
                restValue -
                discountValue;


            // Update summary
            totalElement.textContent =
                "$" + total.toFixed(2);


            restElement.textContent =
                "$" + restValue.toFixed(2);


            discountElement.textContent =
                "$" + discountValue.toFixed(2);


            paymentElement.textContent =
                "$" + payment.toFixed(2);

        }


        // ================================
        // REST CHANGE
        // ================================

        rest.addEventListener(
            "input",
            updateInvoice
        );


        // ================================
        // DISCOUNT CHANGE
        // ================================

        discount.addEventListener(
            "input",
            updateInvoice
        );


        // ================================
        // CANCEL BUTTON
        // ================================

        cancelBtn.addEventListener(
            "click",
            function () {

                description.value = "";

                quantity.value = "";

                price.value = "";


                description.focus();

            }
        );


        // ================================
        // DOWNLOAD EXCEL
        // ================================

        downloadExcelBtn.addEventListener(
            "click",
            function () {


                // Check products
                if (products.length === 0) {

                    alert(
                        "Fadlan marka hore ku dar alaab!"
                    );

                    return;

                }


                // Excel data
                const excelData =
                    products.map(
                        function (product, index) {

                            return {

                                "No":
                                    index + 1,

                                "Description":
                                    product.name,

                                "QTY":
                                    product.quantity,

                                "Price":
                                    product.price,

                                "Amount":
                                    product.amount

                            };

                        }
                    );


                // Calculate total
                const total =
                    products.reduce(
                        function (
                            sum,
                            product
                        ) {

                            return (
                                sum +
                                product.amount
                            );

                        },
                        0
                    );


                // Get rest
                const restValue =
                    Number(rest.value) || 0;


                // Get discount
                const discountValue =
                    Number(discount.value) || 0;


                // Calculate payment
                const payment =
                    total +
                    restValue -
                    discountValue;


                // Add summary to Excel
                excelData.push({

                    "No": "",

                    "Description": "TOTAL",

                    "QTY": "",

                    "Price": "",

                    "Amount": total

                });


                excelData.push({

                    "No": "",

                    "Description": "REST",

                    "QTY": "",

                    "Price": "",

                    "Amount": restValue

                });


                excelData.push({

                    "No": "",

                    "Description": "DISCOUNT",

                    "QTY": "",

                    "Price": "",

                    "Amount": discountValue

                });


                excelData.push({

                    "No": "",

                    "Description": "PAYMENT",

                    "QTY": "",

                    "Price": "",

                    "Amount": payment

                });


                // Create worksheet
                const worksheet =
                    XLSX.utils.json_to_sheet(
                        excelData
                    );


                // Column widths
                worksheet["!cols"] = [

                    { wch: 8 },

                    { wch: 30 },

                    { wch: 10 },

                    { wch: 15 },

                    { wch: 15 }

                ];


                // Create workbook
                const workbook =
                    XLSX.utils.book_new();


                // Add worksheet
                XLSX.utils.book_append_sheet(

                    workbook,

                    worksheet,

                    "Invoice"

                );


                // Download file
                XLSX.writeFile(

                    workbook,

                    "Invoice_0001.xlsx"

                );

            }
        );


        // Initial invoice update
        updateInvoice();

