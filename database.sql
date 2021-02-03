
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" TEXT,
    "user_id" INT REFERENCES "user"
);

INSERT INTO "user" ("username", "password")
VALUES ('SimmyJuan', 'Bork'), ('Husstle', 'laser'), ('Radical', 'brock'), ('GrimApples', 'borccoli');

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES ('Brock kickin A**', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.bleacherreport.net%2Fcms%2Fmedia%2Fimage%2Ffa%2F5a%2Fa6%2F64%2F899e%2F49b0%2Fba30%2F1b9888134571%2FSS_08172014jg_1618b--8e4c8d4772a1e4842f8bc1b6d6a4e38e.jpg&imgrefurl=https%3A%2F%2Fbleacherreport.com%2Farticles%2F2905022-booking-a-shock-brock-lesnar-return-at-wwe-summerslam-2020&tbnid=UKOb7RqAylsalM&vet=12ahUKEwi05O2vuc7uAhVIXqwKHdFADWkQMygRegUIARD5AQ..i&docid=i5D4s_0xhLALoM&w=1920&h=1080&q=brock%20lesnar&ved=2ahUKEwi05O2vuc7uAhVIXqwKHdFADWkQMygRegUIARD5AQ', 1),
('Brock looking scary af', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.insidesport.co%2Fwp-content%2Fuploads%2F2020%2F06%2FBrock-Lesnar.jpg&imgrefurl=https%3A%2F%2Fwww.insidesport.co%2Fwwe-raw-5-brock-lesnar-moments-which-were-not-part-of-original-storyline%2F&tbnid=ZZVc02ehqUT2oM&vet=12ahUKEwi05O2vuc7uAhVIXqwKHdFADWkQMygEegUIARDdAQ..i&docid=HdVcr7J8JIXWgM&w=696&h=465&q=brock%20lesnar&ved=2ahUKEwi05O2vuc7uAhVIXqwKHdFADWkQMygEegUIARDdAQ', 2),
('Brock havin a laugh', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ringsidenews.com%2Fwp-content%2Fuploads%2F2021%2F01%2Fbrock-lesnar-laugh-4.jpg&imgrefurl=https%3A%2F%2Fwww.ringsidenews.com%2F2021%2F01%2F24%2Fhow-wwe-signed-brock-lesnar%2F&tbnid=1o11r0FdUzuwRM&vet=12ahUKEwi05O2vuc7uAhVIXqwKHdFADWkQMyghegUIARCfAg..i&docid=Lh-nGflF64aaxM&w=800&h=500&itg=1&q=brock%20lesnar&ved=2ahUKEwi05O2vuc7uAhVIXqwKHdFADWkQMyghegUIARCfAg', 3),
('Brock freakin out', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mykhel.com%2Fimg%2F2020%2F06%2Fwwe-raw-brock-angry-1591258823.jpg&imgrefurl=https%3A%2F%2Fwww.mykhel.com%2Fwwe%2Fspoiler-on-brock-lesnar-potential-wwe-return-and-next-opponent-144833.html&tbnid=JY9LtA_PcgcS8M&vet=12ahUKEwi05O2vuc7uAhVIXqwKHdFADWkQMygmegUIARCqAg..i&docid=g2rkGld22_jq_M&w=950&h=534&q=brock%20lesnar&ved=2ahUKEwi05O2vuc7uAhVIXqwKHdFADWkQMygmegUIARCqAg', 4);




