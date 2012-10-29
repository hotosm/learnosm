#jakarta [zoom > 13 ]{
[amenity= 'university']
    { point-file: url(images/university.png);  
    point-transform: "scale(.1)"}
[amenity= "school"]
    { point-file: url(images/school.png);  
    point-transform: "scale(.001)";}
[amenity= "hospital"]
    { point-file: url(images/hospital.png);  
    point-transform: "scale(.1)";} 
  [amenity= "clinic"]
    { point-file: url(images/clinic.png);  
    point-transform: "scale(.1)";} 
[amenity= "pharmacy"]
    { point-file: url(images/pharmacy.png);  
    point-transform: "scale(.1)";}
[amenity = 'place_of_worship']	{ 
		point-file: url(images/mosque.png);
		point-transform: "scale(.001)"; }
  [amenity = 'church']	{
		point-file: url(images/church.png);
		point-transform: "scale(.1)"; }
  [amenity = 'buddhist']	{
		point-file: url(images/buddhist.png);
		point-transform: "scale(.1)"; }
  [amenity = 'hindu']	{
		point-file: url(images/hindu.png);
		point-transform: "scale(.1)"; }
[amenity= "fire_station"]
    { point-file: url(images/fire.png);  
    point-transform: "scale(.1)";}
 [amenity= "embassy"]
    { point-file: url(images/embassy.png);  
    point-transform: "scale(.1)";}
 [amenity= "townhall"] [amenity= "courthouse"]
    { point-file: url(images/public);  
    point-transform: "scale(.1)";}
 [amenity= "public_building"]
    { point-file: url(images/government.png);  
    point-transform: "scale(.1)";}
  [amenity= "police"]
    { point-file: url(images/police.png); 
    point-allow-overlap: true;
    point-transform: "scale(.1)";}
  [amenity= "stadium"] 
    { point-file: url(images/stadium.png);  
    point-transform: "scale(.1)";}
[amenity= "tower"]
    { point-file: url(images/tower.3.png);  
    point-transform: "scale(.1)";}
}

#jakarta [zoom < 14]{
[amenity= 'university']
    { point-file: url(images/university.png);  
    point-transform: "scale(.1)"}
[amenity= "school"]
    { point-file: url(images/school1.png);  }
[amenity= "hospital"]
    { point-file: url(images/hospital1.png);  
    point-transform: "scale(.1)";} 
  [amenity= "clinic"] 
    { point-file: url(images/clinic1.png);  
    point-transform: "scale(.1)";} 
[amenity= "pharmacy"]
    { point-file: url(images/pharmacy1.png);  
    point-transform: "scale(.1)";}
[amenity = 'place_of_worship']	{ 
		point-file: url(images/mosque1.png);}
  [amenity = 'church']	{
		point-file: url(images/church1.png);
		point-transform: "scale(.1)"; }
  [amenity = 'buddhist']	{
		point-file: url(images/buddhist1.png);
		point-transform: "scale(.1)"; }
  [amenity = 'hindu']	{
		point-file: url(images/hindu1.png);
		point-transform: "scale(.1)"; }
[amenity= "fire_station"]
    { point-file: url(images/fire1.png);  
    point-transform: "scale(.1)";}
 [amenity= "embassy"]
    { point-file: url(images/embassy1.png);  
    point-transform: "scale(.1)";}
 [amenity= "townhall"] [amenity= "courthouse"]
    { point-file: url(images/public);  
    point-transform: "scale(.1)";}
 [amenity= "public_building"]
    { point-file: url(images/government1.png);  
    point-transform: "scale(.1)";}
  [amenity= "police"]
    { point-file: url(images/police1.png); 
    point-allow-overlap: true;
    point-transform: "scale(.1)";}
  [amenity= "stadium"] 
    { point-file: url(images/stadium.png);  
    point-transform: "scale(.1)";}
  
}
/*
#jakarta [amenity= 'university'] [amenity= "school"][amenity= "hospital"]
[amenity= "clinic"][amenity= "pharmacy"][amenity = 'place_of_worship']	
[amenity = 'church'][amenity = 'buddhist'][amenity = 'hindu']
[amenity= "fire_station"] [amenity= "embassy"][amenity= "townhall"] [amenity= "courthouse"]
[amenity= "public_building"] [amenity= "police"]  [amenity= "stadium"]
[amenity= "tower"]{
   [zoom < 14] { point-transform:"scale(.0000007)";}}*/
   
