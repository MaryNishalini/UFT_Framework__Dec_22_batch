Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("name:=username").Set "Admin" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("type:=password").SetSecure "63eb912fdb757fafe4d79d054bf68aaa6d0a2efad96e" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebButton("name:= Login ").Click @@ script infofile_;_ZIP::ssf3.xml_;_
