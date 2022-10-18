select "firstName",
       "lastName"
  from "actors"
  join "castMembers" using ("actorId")
  join "films" as "f" using ("filmId")
  where "f"."title" = 'Jersey Sassy';
