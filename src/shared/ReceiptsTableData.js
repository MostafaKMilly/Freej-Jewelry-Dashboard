import faker from "faker";

export let receiptsTableData = [];
for (let i = 1; i <= 14; i++) {
  receiptsTableData[i] = {
    id: i,
    customerName: faker.name.firstName() + " " + faker.name.lastName(),
    date: "2014-09-25",
    amount: Math.floor(Math.random() * 120),
  };
}

export let receiptsTableColumns = [
  {
    Header: "رقم الفاتورة",
    accessor: "id",
  },
  {
    Header: "أسم الزبون",
    accessor: "customerName",
  },
  {
    Header: "تاريخ البيع",
    accessor: "date",
  },
  {
    Header: "المبلغ الاجمالي",
    accessor: "amount",
  },
];
