import faker from "faker";

export let dealersTableData = [];
for (let i = 1; i <= 14; i++) {
  dealersTableData[i] = {
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: faker.address.cityName(),
    amount: Math.floor(Math.random() * 120),
  };
}

export let dealerTableColumns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "FirstName",
    accessor: "firstName",
  },
  {
    Header: "LastName",
    accessor: "lastName",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
];
