select count("cityId") as "#OfCities",
       "c"."name" as "country"
  from "cities"
  join "countries" as "c" using ("countryId")
  group by "c"."name";
