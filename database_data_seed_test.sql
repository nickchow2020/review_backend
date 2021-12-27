INSERT INTO counties (county_name, state)
VALUES
('county1','state1'),
('county2','state2');

INSERT INTO cities (city,county)
VALUES
('city1',1),
('city2',2);

INSERT INTO dog_place_type (place_type)
VALUES
('type1'),
('type2');

INSERT INTO dog_place_detail(
    title,address,description,phone,city,place_type,zipcode,lat,lng)
VALUES
('title1','address1','description1','000-000-0000',1,'type1','00000',123.123,-1234.1234),
('title2','address2','description2','000-000-0000',2,'type2','00000',123.123,1234.1234);


