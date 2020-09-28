RegisterNetEvent('mack_hotkey:client:HotKey')
AddEventHandler('mack_hotkey:client:HotKey', function(data)
	SendHotKey(data.text, data.hotkey, data.exit)
	ExitHotKey(data.text, data.hotkey, data.exit)
end)

function SendHotKey(text, hotkey, exit)
	SendNUIMessage({
		text = text,
		hotkey = hotkey,
		exit = false
	})
end

function ExitHotKey(text, hotkey, exit)
	SendNUIMessage({
		text = text,
		hotkey = hotkey,
		exit = true
	})
end

RegisterCommand("hotkey", function(source , args, rawCommand)
	exports['mack_hotkey']:SendHotKey('Clotheshop', 'E')
end)

RegisterCommand("exithotkey", function(source , args, rawCommand)
	exports['mack_hotkey']:ExitHotKey('Clotheshop', 'E')
end)