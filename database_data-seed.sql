INSERT INTO users (username, password,first_name,last_name,email,is_admin,avatar_url)
VALUES(
    'shuminzhou',
    '$2b$12$ymWGlMG0CdNY7RvyZpMzAOkyFE13LnX1/oEznm4P3/kFU0C09XXYG',
    'shumin',
    'zhou',
    'shumin_z@gmail.com',
    TRUE,
    'www.google.com/app'),
    (
        'nickzhouadmin',
        '$2b$12$FdZCzp5SpWJwDdZk1GWtMOzJseJ77kJtuxWVDi11AqFIlqOEAsqPa',
        'nick',
        'zhou',
        'shumin@gmail.com',
        TRUE,
        'www.google.com/app1'
    ),
    (
        'nickzhou',
        '$2b$12$QKu9ludUeoO0hF0A6SMkxO7EFkhQmP0TmTPXxpaV/Tg76U1Yiqjsu',
        'nick',
        'zhou',
        'shumin@gmail.com',
        FALSE,
        'www.google.com/app'
    )
    ;


INSERT INTO counties (county_name, state)
VALUES
('Los Angeles','CA'),
('Imperial','CA'),
('Riverside','CA'),
('Orange','CA'),
('San Bernardino','CA'),
('Santa Barbara','CA'),
('San Diego','CA'),
('Ventura','CA');


INSERT INTO cities (city, county)
VALUES 
('Brea',4),
('West Covina',1),
('Anaheim',4),
('Pasadena',1),
('San Dimas',1),
('Huntington Beach',4),
('Fullerton',4),
('Orange',4),
('Long Beach',1),
('Whittier',1),
('South Pasadena',1),
('Glendora',1),
('Diamond Bar',1),
('Ontario',5),
('West Hollywood',1),
('La Puente',1),
('Los Angeles',1),
('Woodland Hills',1),
('Covina',1),
('Rowland Heights',1),
('Irvine',4);

INSERT INTO dog_place_type (place_type)
VALUES
('park'),
('hospital');


INSERT INTO dog_place_detail (title,address,description,phone,city,place_type,zipcode,lat,lng)
VALUES
('Wildcatters Dog Park','3450 E Santa Fe Rd','The Dog Park consists of two separate areas, 1/3 of an acre is dedicated to small dogs, weighing less than 25 pounds and the other area, which is almost the size of a football field is for the large dogs, weighing over 25 pounds.','(714)990-7100',1,'park','92821',33.92776472630945, -117.84902063091035),
('Central Bark Dog Park','1500 W Rowland Ave','Great place to bring your dogs. Big or small. They have two different sections one for big dogs and another for smaller dogs. With local public restrooms and water fountains available. There are benches where there is  shade so you can relax while your dog socializes with other mans best friend','(000)110-1100',2,'park','91791',34.07885178037375, -117.93762860207235),
('Olive Hills Dog Park','700 S E Nohl Canyon Rd','Situated next to the Olive Hills Tennis Courts, the Olive Hills Dog Park opened August 2016. The dog park features a perimeter walking/jogging path, patches of artificial turf, separated small and large dog use areas with agility equipment, benches, and native plant materials.',' (714)765-5191',3,'park','92807',33.836511927439695, -117.8253721137248),
('Alices Dog Park','3026 E Orange Grove Blvd','Separate small and large dog fenced areas. Mostly grass, plenty of free parking, water fountains, and trash receptacles. Shaded areas with benches.','(626)744-7195',4,'park','91107',34.15691150569403, -118.08674778936356),
('San Dimas Dog Park','301 Horsethief Canyon Road','Really great place although the actual fenced-in dog park is usually very muddy. However, theres a nice little trail for hiking that my girls always get tuckered out with','(909)394-6230',5,'park','91773',34.12714026882527, -117.8017939732363),
('Dog Beach','20211 Huntington Beach Bike Trail','here are so many people who brings their dogs of all sizes and breeds and they share their happiness to everyone around! The dogs are all very playful and the best part is its away from the busiest part of the beach.','(562)570-3100',6,'park','92648',32.75633470555566, -117.25110791607081),
('Fullerton Pooch Park','201 S Basque Ave','he winds dont help along with the pandemic. There is water readily available in all pooch areas. There are plenty of beaches in the small dog area.','(714)738-6575',7,'park','92833',33.86941966256282, -117.95513887508723),
('Orange Dog Park Association','190 S Yorba St','This is a top notch dog park. Great big and little dog areas. People and dogs were well behaved',' (714)744-5592',8,'park','92869',33.786706218478926, -117.82888231557202),
('El Dorado Park Dog Park','7550 E Spring St','The people here are friendly, this entire park is awesome. There us plenty benches to sit while.our 4 legged friends play and run','(562)570-3150',9,'park','90815',33.810865237588395, -118.0850448174179),
('Rosies Dog Beach','5000 E Ocean Blvd','Compared to Huntington Dog Beach, its much easier to find parking and the beach itself is easily accessible. Parking meters were easy to find. It was pretty clean and there were plenty of puppy poop bags and trash bins throughout the area','(562)570-3100',9,'park','90803',33.75565506366222, -118.13966481557266),
('Whittier Dog Park','12206 Philadelphia St','enjoyed time there even though there was only one other furry friend. Overall clean park, just wish there was more trees and shade.','(562)567-9400',10,'park','90601',33.978247421615386, -118.04630111556855),
('South Pawsadena Dog Park','650 Stoney Dr','Came here on a hot day to take out our pup for a bit. It was our new rescue’s first dog park. Fortunately there were only a few other dogs and he was able to socialize','(626)403-7380',11,'park','91030',34.11751132647116, -118.16721798857711),
('South Hills Dog Park','701 E Mauna Loa Ave','Kind of hidden, follow signs. Dog park small & large dogs, playground, lots of multi use trails to hike bike or horseback ride','(626)914-8228',12,'park','91740',34.12530649157804, -117.8557490020714),
('Pantera Dog Park','738 Pantera Dr','There is tennis courts, basketball courts and soccer fields. There was a map for a trail that went up into some low hills but only one arrow saying dog park.','(909)839-7070',13,'park','91765',34.01205964107224, -117.79046297323839),
('Schimmel Dog Park','900-998 N Cucamonga Ave','Great Park for small and Large breeds never really too crowded for the most part','(000)636-3636',14,'park','91764',34.07476672943201, -117.6316401732372),
('West Hollywood Park Dog Park','647 N San Vicente Blvd','Lively and friendly dog park that attracts a diverse crowd of doggos. The park is fully turf, so dogs can run around and not risk getting dirty or hurt. Small and large dogs have separate play areas','(000)123-4656',15,'park','90069',34.08419342483656, -118.38409635974257),
('Southern California Animal Hospital','14744 Valley Blvd','Southern California Animal Hospital is a full-service, community based animal hospital. We have been serving our community since 1956. We are well equipped and growing Animal Hospital for more than 50 years.','(626)330-4558',16,'hospital','91746',34.032770786480015, -117.97205269604017),
('Animal Medical Center of Southern California','2340 S Sepulveda Blvd','The Animal Medical Center of Southern California is devoted to providing the best medical, surgical and emergency critical care available in veterinary medicine. As important as our medical expertise is, we believe that excellent care combines state-of-the-art veterinary medicine and surgery with a focus on compassion and respect for your pet and for your family','(562)570-3100',17,'hospital','90064',34.037921812199386, -118.43562150391948),
('Adams Animal Hospital','1559 Amar Rd N','Employees are very nice and responsive. Prices are reasonable! I have brought  my 3 fur babies to this place for their shots and check ups! They are also taking COVID-19 guidelines seriously, which is a plus.,','(562)570-3100',2,'hospital','91792',34.0311329645758, -117.91172168857867),
('Southern California Veterinary Hospital','5421 Topanga Canyon Blvd','We are a full service animal hospital and will take both emergency cases as well as less urgent medical, surgical, and dental issues.','(818)999-1290',18,'hospital','91367',34.169345194359465, -118.60616097323542),
('Emergency Pet Hospital of Glendora','500 S Glendora Ave','Emergency Pet of Hospital of Glendora is fully equipped with the latest in diagnostic technology and equipment on premises. Our highly qualified licensed veterinarians and technicians have the experience and proficiency to provide critical care including pain relief, stabilization, and immediate life saving surgery as needed','(626)594-0356',12,'hospital','91740',34.130112085889124, -117.86360094624729),
('VCA West Los Angeles Animal Hospital','1900 S Sepulveda Blvd','Open for emergencies 24/7. No appointment is needed. For Specialty Services, please call for availability and to schedule your pets appointment','(310)473-2951',17,'hospital','90025',34.04453343989428, -118.44108927323778),
('Country Club Animal Hospital','2674 E Garvey Ave S','We are a general practice located in West Covina, CA, specializing in internal medicine, preventative care, dermatology, and eastern medicine such as acupuncture. The owner of the practice, Dr. Jong Hoon Shin, recently came into ownership early this year and graduated from the prestigious Seoul National University in 2000','(626)859-4400',2,'hospital','91791',34.07027070018178, -117.88845697508361),
('Banfield Pet Hospital','2350 S Azusa Ave','Keeping pets and people safe is our top priority. COVID-19 may affect hospital hours, scheduling and services at some locations. Please know we are doing our best to minimize any inconvenience and thank you for bearing with us — please call ahead so we can ensure your pet’s needs can be met and advise you on next steps','(626)810-0990',2,'hospital','91792',34.03758282588983, -117.9093992631711),
('Covina Animal Hospital','302 E San Bernardino Rd','At Covina Animal Hospital, our mission is to provide the highest quality veterinary medicine and client service so that pets live longer, happier, healthier lives.',' (626)331-5374',19,'hospital','91723',34.09040186855412, -117.88555421556647),
('Casillas Veterinary Hospitals','5655 Whittier Blvd','Casillas Veterinary Hospitals is pleased to serve Montebello, East Los Angeles, Lynwood as well as the surrounding areas. Our goal is to provide you and your pets with the best veterinary experience possible','(323)721-2244',17,'hospital','90022',34.01899068538839, -118.14848765165755),
('West Covina Pet Hospital','1823 W San Bernardino Rd','Our mission is to care for your pet as a family member and to do everything possible for our patients health, happy and long life','(626)337-2023',2,'hospital','91790',34.09057566817103, -117.94242903090725),
('Arrow Animal Hospital','334 W Arrow Hwy','Arrow Animal Hospital has been serving San Dimas since 1970. We have grown through the years and we are excited about our 6300 square foot state-of-the-art facility to bring the highest quality of animal care','(909)592-1931',5,'hospital','91773',34.102987273150305, -117.81318637323665),
('Arc Animal Hospital','17831 Colima Rd','Arc Animal Hospital is a full-service veterinary hospital providing quality care for the health of your pets. We offer convenient evening and weekend appointments to fit your schedule.','(626)581-0100',20,'hospital','91748',33.991003245056085, -117.91653657323876),
('Brookhurst Animal Medical Center','1301 S Brookhurst St','Dr. López is an Anaheim Veterinarian specializes in care for dogs, cats, and exotics. His role in Nat Geo Mundo’s television show “Dr. Vet LA” allowed him to show his skills treating animals like tigers and elephants; at home at Brookhurst Animal Medical Center, the pets are usually tamer, but Dr. López can adapt his knowledge to all different types of animals.',' (714)776-7387',3,'hospital','92804',33.815249589386525, -117.95918753091235),
('BluePearl Pet Hospital','1371 Reynolds Ave','When you have a pet emergency, seconds count. We want you to know, we’re ready. If your pet has a condition that requires a specialist’s expertise, we’re ready for that too. Our experienced veterinarians, vet technicians and support staff work closely together to provide the comprehensive, compassionate care your pet needs and deserves.','(949)833-9020',21,'hospital','92614',33.6968599495924, -117.8552376211127),
('Whittier Dog & Cat Hospital','12124 Philadelphia St','Whittier Dog & Cat Hospital is proud to serve Whittier, CA and surrounding areas. We are dedicated to providing the highest level of veterinary medicine along with friendly, compassionate service','(562)698-0264',10,'hospital','90601',33.97916280065377, -118.04699101556858);


INSERT INTO review_comments(user_id,dog_place_id,score,comment)
VALUES
(1,1,5,'Nice park, wish there was more shade.'),
(2,1,5,'Excellent dog park. Nicely scaped and shady sections too!'),
(3,1,4,'My dog loves it here. Big dog and small dog park. I feel like people tend to do a better job of watching their pups then other parks.'),
(2,2,2,'Its a nice park, for a small breed dog its a large area but for bigger dogs such as German Shepherds space is limited .'),
(1,2,5,'Nice place with shaded areas.  Would recommend it'),
(3,2,5,'10 PM & all quiet...empty except for asking mom and her daughter playing on swings.. Queenie was all calm and content to smell every bush and rock .'),
(1,3,4,'Nice Dog Park.  More hilly than most and smaller, but clean.  It has a big dog and little dog park.  Hasnt been very crowded yet.  Everyone we are met there is friendly.'),
(2,3,5,'My dog loves to go here people are very friendly and the atmosphere is active there is also a restroom and is kept very clean. You can play tennis or handball or walk the trails its awesome'),
(3,3,5,'My pup loved this dog park. Really nice people and dogs. A big and a small dog section which is nice. Great shade in the morning as well.'),
(1,4,5,'Beautiful and peaceful park. Recommend coming here for a nice walk in nature, and the dog park.'),
(2,4,4,'Definitely one of my dogs favorite parks. Overall clean, spacious, and lots of grass. Never had an issue here and all the other dog parents are generally polite and friendly which is a huge plus.'),
(3,4,5,'Friendly place if you like company while exercising your dog!'),
(1,5,5,'Had a lot of fun here and my dog loved it. Lots of friendly people and lovable dogs. Park has a lot of room for the dogs to run and play.'),
(2,5,5,'Nice open field with grass and a track around the outside. Also has a place to sit with a big group.'),
(3,5,5,'Love how big this park is. Even with plenty of dogs the people can still spread out!'),
(1,6,5,'Out of all the dog parks in the Inland empire this one is my favorite.  So clean and green. And bonus is everyone is really friendly.'),
(2,6,5,'Huge space for your dogs, especially large dogs!!! Might be top 3 largest in southern California I are been to so far. Super well maintained space and really nice people that come.'),
(3,6,4,'Expansive area for large breeds friendly dogs and owners'),
(1,7,5,'Love it here! So does my pooch.'),
(2,7,5,'Best dog park in the area. Lots of room and grass and trees'),
(3,7,4,'Love this place. People are nice and dogs are playful'),
(1,8,5,'Green and beautiful nice view'),
(2,8,5,'Dark is often look at the signs regarding Covid rules'),
(3,8,5,'Beautiful View! Clean, safe place for a nice walk or picnic!'),
(1,9,5,'Great park for a hike or just letting your furry friends play'),
(2,9,5,'Great spot for dogs off all sizes. Wonderfully size area for large dogs. Great location with wonderful views. People are nice here as well'),
(3,9,5,'Graduation party for my gorgeous daughter. Love to go to this park. Clean. Beautiful.'),
(1,10,4,'Love that most of the park has nice grass and lots of shade.'),
(2,10,5,'Very nice dog park! friendly people and the dogs loved it! the only thing I didnt like was that I was wearing sandals and there was lots of mud'),
(3,10,5,'Great dog park. Plenty of room to run and play. Good doggies and responsible owners.'),
(1,11,5,'Trail, green grass, clean, view and easy access'),
(2,11,5,'Best dog park ever!!! My puppy had a great time running around, playing with all the dogs and getting pet by there owners. He even left with a fancy bandana provided by fire hydrant pets'),
(3,11,5,'Really enjoy the variety of dogs my own pup gets to interact with here. And the hiking trails above the park make a perfect quick cooldown for after playtime!'),
(1,12,5,'Nice quiet spot to let your dog run around and enjoy themselves. Also has a gated area for your pet.'),
(2,12,5,'Great dog park to bring your pups to- especially with nearby trails to hike at. The dog park is currently closed though, you’ll see signs when you pull in- probably due to all the rain recently. So I took mine on a trail'),
(3,12,4,'Nice, well groomed park'),
(1,13,5,'Probably our favorite park. Well kept, friendly people, responsible owners and fun dogs. Has a big dog and a little dog side. Huge area for the pups to play in.'),
(2,13,5,'Really nice park with a nice hiking trail'),
(3,13,4,'Clean nice view great view'),
(1,14,5,'Love this place, surrounding hikes are great too.'),
(2,14,5,'My pups favorite dog park! Plenty of running space but beware the mud.'),
(3,14,4,'BEAUTIFUL, cant wait to go back'),
(1,15,5,'Fairly large dog park with separate sides for large and small dogs. Water and poop bags readily available. Lots of shade and benches, and plenty of room for dogs to run and play.'),
(2,15,4,'Very clean and super friendly for senior dogs if you take them on the small dog side'),
(3,15,5,'Friendly patrons. Well behaved dogs. People are mindful of their dogs business😉'),
(1,16,4,'Great space and people, friendly dogs also..if i can achieve astral projection so can you.'),
(2,16,5,'great place to let your dogs run around,  good size and well kept'),
(3,16,5,'Love the dog park. My dog had a great time and meet new friends'),
(1,17,5,'Great place my dawg came out smiling! Buddy says thank you !'),
(2,17,5,'Amazing staff and amazing doctor.  I have been going there since 2019 and the best vet on the Westside!!'),
(3,17,4,'Fantastic service and 1/3 of the cost of vets in Manhattan beach.'),
(1,18,5,'Awesome staff, kind and polite. Also the veterinarian Dr. Husky great guy extremely sincere. You can tell he has a passion for his profession I will definitely be back'),
(2,18,5,'Great experience!'),
(3,18,5,'omg, excellent service and I treat our dog children, adding a good service and solving questions on the phone when there are doubts that sadden us about our dog children ..... I recommend them 100%'),
(1,19,4,'Always great to work with Dr. Schulman'),
(2,19,5,'Dr. Husky was so kind and helpful. When I came in, I was dealing with the "puppy blues," but Dr. Husky really made me feel better by patiently answering my questions. The other staff were all super sweet towards my puppy'),
(3,19,5,'It was my first time being there. ''I have to say that the staff there are really polite and really helpful...'' Animal Medical Center is the spot for my pets!'),
(1,20,5,'Really good vets, they explain everything and are very kind and loving to all pets'),
(2,20,5,'I didnt feel like I was being hustled.  And I didnt feel like they were gouging a big hole in my wallet.  The Vet was very friendly & knowledgeable & I felt my pet & I well taken care of.'),
(3,20,5,'I was helped quickly and effectively, when I thought my pet might be experiencing an emergency'),
(1,21,4,'Friendly knowledgeable staff'),
(2,21,5,'Staff was so patient and caring!'),
(3,21,5,'I want to thank Dr. Shulman and Dr. Husky for always the fantastic service and help with my dog "Sofie."  They have done so much for me to keep my dog healthy and active.  I have been going to Dr. Shulman for over 20 years with all my pets in the past. I recommend everyone I know to him.'),
(1,22,5,'Wouldnt trust anyone else with my pup!'),
(2,22,5,'Excellent vets.'),
(3,22,5,'Awesome care'),
(1,23,4,'Great experience'),
(2,23,5,'Clean, good stock of items, not crowded'),
(3,23,5,'Dr. Alan Schumann is the best!'),
(1,24,5,'Very helpful staff'),
(2,24,5,'Great friendly service!'),
(3,24,5,'We have been taking our dogs to Dr. Schulman for 15 years. He did surgery on our dogs knee, has treated various skin allergies and has always treated our animals with kindness and professionalism. We LOVE Dr. Schulman and his team!'),
(1,25,5,'Compassionate doctors. My pup enjoys coming to visit the staff!'),
(2,25,5,'Dr Bianco and this staff were amazing. Saved my dog magic life, and mine as well. They are great.'),
(3,25,5,'Great job!'),
(1,26,5,'My dog had gotten run over, bleeding from her mouth and had a cut along her back left leg, and they had made ne feel so much better because of their treatment they gave her she is family and for a moment I thought she was a goner...'),
(2,26,5,'Love that place'),
(3,26,5,'Love it Awesome service'),
(1,27,5,'Very nice people. Accommodating. Easy to work with.'),
(2,27,5,'Totally recommend this vet for all pets affordable and everyone that works here is nice , thanks to everyone that works here for saving my dogs life “Gucci” especially the nurse that helped me forgot her name but big thank you to you'),
(3,27,5,'This place was amazing. I cant give enough praises for this pet hospital.'),
(1,28,5,'I would like to thank Dr. B and the girls at the clinic for taking good care of Dollie thats my mom puppy, well Dollie was jumping and landed wrong on her foot.'),
(2,28,5,'The veterinarian were very nice and clam to my dog roscoe they are very good prices. They gave my dog medication at a good price'),
(3,28,5,'Thank you for helping my pet when 10 other vets turned me down. They even helped me with some of the cost.'),
(1,29,5,'This is truly the best Pet Hospital and the Greatest Veterinarian ever. Dr. B was extremely caring and showed compassion towards both my dogs.'),
(2,29,5,'I really like this Pet Hospital and I were been to so many with my passion for rescue work I do for the animals.'),
(3,29,5,' have had nothing but the best experience with this hospital.  The Dr and the staff are so amazing and show that they really care.  I rescued my dog Pepper and I did not know she was ill.  I brought my dog here and they helped us every time.'),
(1,30,5,'Walk-ins are $55, appointments are $45. You can ask for a quote before they administer any treatment to make sure youre getting what your pup needs. When I went in at 10 am on a Friday, the place was pretty empty. Their costumer service over the phone is excellent'),
(2,30,4,'We were from out of state and they made us feel like we were family. Our little Gator broke her leg and they fixed her up on a Saturday.'),
(3,30,5,'The staff here is wonderful, I have been bringing my yorkies hrre since 2004. Always a good, warm and caring experience! Thank you Dr. B!!'),
(1,31,5,'Our dog Mitzi had two torn ACL and when we walked in for the first time. Dr B made us feel so comfortable and explained to us what we needed to do'),
(2,31,4,'this place is the best! They saved my dog she is a living miracle! The staff and the doctor were amazing! I love them!'),
(3,31,5,'Great service and caring staff. My dog had to go to the emergency room after an accident with another dog but West Covina Pet Hospital was very through with their care for him and explained the procedure to us clearly'),
(1,32,5,'We had an emergency with our dog last night and took a chance to see if the hospital was still open. We were so sad to see that they closed at 6pm and it was almost 7pm.'),
(2,32,5,'Generations of my family have been taking there pets here. I always get good service and they walk the dogs when they are boarded to keep them healthy. I highly recommend it'),
(3,32,5,'This pet hospital is best I were ever been to. They not only treat the animals with loving care. They also treat the owners very caring and helpfulness.');


INSERT INTO dog_place_image(place_id,image_url)
VALUES
(1,'https://cap2review.s3.us-west-1.amazonaws.com/images/park1_1.jpeg'),
(1,'https://cap2review.s3.us-west-1.amazonaws.com/images/park1_2.jpeg'),
(2,'https://cap2review.s3.us-west-1.amazonaws.com/images/park2_1.jpeg'),
(2,'https://cap2review.s3.us-west-1.amazonaws.com/images/park2_2.jpeg'),
(3,'https://cap2review.s3.us-west-1.amazonaws.com/images/park3_1.jpeg'),
(3,'https://cap2review.s3.us-west-1.amazonaws.com/images/park3_2.jpeg'),
(4,'https://cap2review.s3.us-west-1.amazonaws.com/images/park4_1.jpeg'),
(4,'https://cap2review.s3.us-west-1.amazonaws.com/images/park4_2.jpeg'),
(5,'https://cap2review.s3.us-west-1.amazonaws.com/images/park5_1.jpeg'),
(5,'https://cap2review.s3.us-west-1.amazonaws.com/images/park5_2.jpeg'),
(6,'https://cap2review.s3.us-west-1.amazonaws.com/images/park6_1.jpeg'),
(6,'https://cap2review.s3.us-west-1.amazonaws.com/images/park6_2.jpeg'),
(7,'https://cap2review.s3.us-west-1.amazonaws.com/images/park7_1.jpeg'),
(7,'https://cap2review.s3.us-west-1.amazonaws.com/images/park7_2.jpeg'),
(8,'https://cap2review.s3.us-west-1.amazonaws.com/images/park8_1.jpeg'),
(8,'https://cap2review.s3.us-west-1.amazonaws.com/images/park8_2.jpeg'),
(9,'https://cap2review.s3.us-west-1.amazonaws.com/images/park9_1.jpeg'),
(9,'https://cap2review.s3.us-west-1.amazonaws.com/images/park9_2.jpeg'),
(10,'https://cap2review.s3.us-west-1.amazonaws.com/images/park10_1.jpeg'),
(10,'https://cap2review.s3.us-west-1.amazonaws.com/images/park10_2.jpeg'),
(11,'https://cap2review.s3.us-west-1.amazonaws.com/images/park11_1.jpeg'),
(11,'https://cap2review.s3.us-west-1.amazonaws.com/images/park11_2.jpeg'),
(12,'https://cap2review.s3.us-west-1.amazonaws.com/images/park12_1.jpeg'),
(12,'https://cap2review.s3.us-west-1.amazonaws.com/images/park12_2.jpeg'),
(13,'https://cap2review.s3.us-west-1.amazonaws.com/images/park13_1.jpeg'),
(13,'https://cap2review.s3.us-west-1.amazonaws.com/images/park13_2.jpeg'),
(14,'https://cap2review.s3.us-west-1.amazonaws.com/images/part14_1.jpeg'),
(14,'https://cap2review.s3.us-west-1.amazonaws.com/images/park14_2.jpeg'),
(15,'https://cap2review.s3.us-west-1.amazonaws.com/images/park15_1.jpg'),
(15,'https://cap2review.s3.us-west-1.amazonaws.com/images/park15_2.jpeg'),
(16,'https://cap2review.s3.us-west-1.amazonaws.com/images/park16_1.jpeg'),
(16,'https://cap2review.s3.us-west-1.amazonaws.com/images/park16_2.jpeg'),
(17,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital1_1.jpeg'),
(17,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital1_2.jpeg'),
(18,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital2_1.jpeg'),
(18,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital2_2.jpeg'),
(19,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital3_1.jpeg'),
(19,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital3_2.jpeg'),
(20,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital4_1.jpeg'),
(20,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital4_2.jpeg'),
(21,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital5_1.jpeg'),
(21,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital5_2.jpeg'),
(22,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital6_1.jpeg'),
(22,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital6_2.jpeg'),
(23,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital7_1.jpeg'),
(23,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital7_2.jpeg'),
(24,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital8_1.png'),
(24,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital8_2.jpeg'),
(25,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital9_1.jpeg'),
(25,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital9_2.jpeg'),
(26,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital10_1.jpeg'),
(26,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital10_2.jpeg'),
(27,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital11_1.jpeg'),
(27,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital11_2.jpeg'),
(28,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital12_1.jpeg'),
(28,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital12_2.jpeg'),
(29,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital13_1.jpeg'),
(29,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital13_2.jpeg'),
(30,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital14_1.jpeg'),
(30,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital14_2.jpeg'),
(31,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital15_1.jpeg'),
(31,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital15_2.jpeg'),
(32,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital16_1.jpeg'),
(32,'https://cap2review.s3.us-west-1.amazonaws.com/images/hospital16_2.jpeg');
