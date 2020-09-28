# mack-hotkey  

📗 How to Use  
On your Client-Side use:
- `exports['mack_hotkey']:SendHotKey('text', 'hotkey')` to show up a hotkey
- `exports['mack_hotkey']:ExitHotKey('text', 'hotkey')` to remove the hotkey
Example using esx_accessories:  
**Original:**
``Citizen.CreateThread(function()
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
end)``

**With hotkey:**
``Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)
		local coords = GetEntityCoords(PlayerPedId())
		for k,v in pairs(Config.Zones) do
			for i = 1, #v.Pos, 1 do
				if(Config.Type ~= -1 and GetDistanceBetweenCoords(coords, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, true) < Config.DrawTextDistance) then
				local dstCheck = GetDistanceBetweenCoords(coords, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, true)
				if dstCheck <= 1.5 then
					exports['mack_hotkey']:SendHotKey('Clotheshop', 'E')
				else
					exports['mack_hotkey']:ExitHotKey('Clotheshop', 'E')
				end
					DrawMarker(Config.Type, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.Size.x, Config.Size.y, Config.Size.z, Config.Color.r, Config.Color.g, Config.Color.b, 100, false, true, 2, false, false, false, false)
				end
			end
		end
	end
end)``

## ⚙️ How to Install  
- Download mack_hotkey (https://github.com/Mackgame4/mack-hotkey) and drop in your "resources" folder  
- Add to your server.cfg, the following line: ```ensure mack_hotkey```  
- Just start your server and have fun  

## 📷 Screenshots  
Screenshot:
Video:

## 🔖 Attention:  
Don't change the folder name ("mack_hotkey") or it won't work

## ☁️ Download:  
[Here](https://github.com/Mackgame4/mack_hotkey) or Github (https://github.com/Mackgame4/mack_hotkey)  
Join our [Discord](https://discord.gg/As3VMTb) or in (https://discord.io/mack)  
### Creators: Mackgame4
