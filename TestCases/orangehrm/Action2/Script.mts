Browser("name:=OrangeHRM").Page("title:=OrangeHRM").Link("innertext:=PIM").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("name:=OrangeHRM").Page("title:=OrangeHRM_2").WebEdit("xpath:=//*[@id=app]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input").Set  @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("name:=OrangeHRM").Page("title:=OrangeHRM_2").WebButton("xpath:=//*[@id=app]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]").Click @@ script infofile_;_ZIP::ssf3.xml_;_
