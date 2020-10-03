# mack-hotkey  

## 📗 How to Use  

On your Client-Side use:  
- `exports['mack_hotkey']:SendHotKey('text', 'hotkey', 'id')` to show up a hotkey  
- `exports['mack_hotkey']:ExitHotKey('text', 'hotkey', 'id')` to remove the hotkey  
#### Id will link the Hotkeys so you can control all the content using only the id

Example using esx_accessories:  
**Original:**  
```
Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)
		local coords = GetEntityCoords(PlayerPedId())
		for k,v in pairs(Config.Zones) do
			for i = 1, #v.Pos, 1 do
				if(Config.Type ~= -1 and GetDistanceBetweenCoords(coords, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, true) < Config.DrawDistance) then
				  DrawMarker(Config.Type, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.Size.x, Config.Size.y, Config.Size.z, Config.Color.r, Config.Color.g, Config.Color.b, 100, false, true, 2, false, false, false, false)
				end
			end
		end
	end
end)
```
**With hotkey:**  
```Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)
		local coords = GetEntityCoords(PlayerPedId())
		for k,v in pairs(Config.Zones) do
			for i = 1, #v.Pos, 1 do
				if(Config.Type ~= -1 and GetDistanceBetweenCoords(coords, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, true) < Config.DrawTextDistance) then
				-- ### Location 1
				local dstCheck = GetDistanceBetweenCoords(coords, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, true)
				if dstCheck <= 1.5 then
					exports['mack_hotkey']:SendHotKey('Accessories', 'E', 1)
				else
					exports['mack_hotkey']:ExitHotKey('Accessories', 'E', 1)
				end
				-- ### Location 2
				local distance = GetDistanceBetweenCoords(coords, v.Pos[i].x+1, v.Pos[i].y+1, v.Pos[i].z, true)
				if distance <= 1.5 then
					exports['mack_hotkey']:SendHotKey('Clotheshop', 'E', 2)
				else
					exports['mack_hotkey']:ExitHotKey('Clotheshop', 'E', 2)
				end
					DrawMarker(Config.Type, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.Size.x, Config.Size.y, Config.Size.z, Config.Color.r, Config.Color.g, Config.Color.b, 100, false, true, 2, false, false, false, false)
				end
			end
		end
	end
end)
```

## ⚙️ How to Install  
- Download mack_hotkey (https://github.com/Mackgame4/mack-hotkey) and drop in your "resources" folder  
- Add to your server.cfg, the following line: ```ensure mack_hotkey```  
- Just start your server and have fun  

## 📷 Screenshots  
Screenshot: https://i.imgur.com/XhZ8Cbr.png  
Video: Coming Soon  

## 🔖 Attention:  
- Don't change the folder name ("mack_hotkey") or it won't work  
- Remember to create different variables to different events (at least you want the same event/effect)

## ☁️ Download:  
[Here](https://github.com/Mackgame4/mack-hotkey) or Github (https://github.com/Mackgame4/mack-hotkey)  
Join our [Discord](https://discord.gg/As3VMTb) or in (https://discord.io/mack)  
### Creators: Mackgame4  
