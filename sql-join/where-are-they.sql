select "line1",
       "c"."name" as "city",
       "district",
       "C"."name" as "country"
  from "addresses"
  join "cities" as "c" using ("cityId")
  join "countries" as "C" using ("countryId");
