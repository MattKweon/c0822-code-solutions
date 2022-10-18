select "amount",
       "firstName",
       "lastName"
  from "payments"
  join "customers" using ("customerId")
  limit 10;
