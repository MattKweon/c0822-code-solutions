select "firstName",
       "lastName"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" as "f" using ("filmId")
  where "f"."title" = 'Magic Mallrats';
