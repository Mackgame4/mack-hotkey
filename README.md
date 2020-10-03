# mack-hotkey  

## 📗 How to Use  

On your Client-Side use:  
- `exports['mack_hotkey']:SendHotKey('text', 'hotkey')` to show up a hotkey  
- `exports['mack_hotkey']:ExitHotKey('text', 'hotkey')` to remove the hotkey  

Example using esx_accessories:  
**With hotkey:**  
```
Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)
		local coords = GetEntityCoords(PlayerPedId())
		for k,v in pairs(Config.Zones) do
			for i = 1, #v.Pos, 1 do
				if(Config.Type ~= -1 and GetDistanceBetweenCoords(coords, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, true) < Config.DrawDistance) then
				local dstCheck = GetDistanceBetweenCoords(coords, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, true)
				if dstCheck <= 1.5 then
					IsHotkeyActive1 = true
				else
					IsHotkeyActive1 = false
				end
				local distance = GetDistanceBetweenCoords(coords, 81.0, -1393.84, 29.38, true)
				if distance <= 1.5 then
					IsHotkeyActive2 = true
				else
					IsHotkeyActive2 = false
				end
					DrawMarker(Config.Type, v.Pos[i].x, v.Pos[i].y, v.Pos[i].z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.Size.x, Config.Size.y, Config.Size.z, Config.Color.r, Config.Color.g, Config.Color.b, 100, false, true, 2, false, false, false, false)
				end
			end
		end
	end
end)

-- This
Citizen.CreateThread(function()
	while true do
	Citizen.Wait(0)
		if IsHotkeyActive1 or IsHotkeyActive2 then
			exports['mack_hotkey']:SendHotKey('Clotheshop', 'E')
		else
			exports['mack_hotkey']:ExitHotKey('Clotheshop', 'E')
		end
	end
end)

-- Or
Citizen.CreateThread(function()
	while true do
	Citizen.Wait(0)
		if IsHotkeyActive1 then
			exports['mack_hotkey']:SendHotKey('Accessories', 'E')
		else
			exports['mack_hotkey']:ExitHotKey('Accessories', 'E')
		end
	end
end)

Citizen.CreateThread(function()
	while true do
	Citizen.Wait(0)
		if IsHotkeyActive2 then
			exports['mack_hotkey']:SendHotKey('Clotheshop', 'E')
		else
			exports['mack_hotkey']:ExitHotKey('Clotheshop', 'E')
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
