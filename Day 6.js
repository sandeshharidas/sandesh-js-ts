<script>

class iphone{
	constructor(os, chip, cpu, gpu, model, manufacture, processor, ram, keyboard, storage, flash, camera, video_record, noise_cancel, expand_storage, type, standby, talktime, musicplay, tech, dimensions, weight, sim){
	this.OS = os
	this.Chipset = chip
	this.CPU = cpu
	this.GPU = gpu
	this.Model = model
	this.Manufactuer = manufacture
	this.Processor = processor
	this.RAM_Memory = ram
	this.Keyboard = keyboard
	this.On_board_storage = storage
	this.Flash = flash
	this.Video_Call_camera = camera
	this.Video_Recording = video_record
	this.Noice_Cancelling = noise_cancel
	this.Expandable_storage = expand_storage
    
    this.Type = type
    this.Stand_by = standby
    this.Talk_time = talktime
    this.Music_play = musicplay
    
    this.Technology = tech
    
    this.Dimensions = dimensions
    this.Weight = weight
    this.SIM = sim
    }
    
    display_all(){
    document.write(this.OS)
    document.write(this.Chipset)
    document.write(this.CPU)
    document.write(this.GPU)
    document.write(this.Model)
    document.write(this.Manufactuer)
    document.write(this.Processor)
    document.write(this.RAM_Memory)
    document.write(this.Keyboard)
    document.write(this.On_board_storage)
    document.write(this.Flash)
    document.write(this.Video_Call_camera)
    document.write(this.Video_Recording)
    document.write(this.Noice_Cancelling)
    document.write(this.Expandable_storage)
    document.write(this.Type)
    document.write(this.Stand_by)
    document.write(this.Talk_time)
    document.write(this.Music_play)
    document.write(this.Technology)
    document.write(this.Dimensions)
    document.write(this.Weight)
    document.write(this.SIM)   
    }
    
    display_platform(){
    document.write(this.OS)
    document.write(this.Chipset)
    document.write(this.CPU)
    document.write(this.GPU)
    }
    
    display_battery(){
    document.write(this.Type)
    document.write(this.Stand_by)
    document.write(this.Talk_time)
    document.write(this.Music_play)
    }
    
    display_network_technology(){
    document.write(this.Technology)
    }
    
    display_body(){
    document.write(this.Dimensions)
    document.write(this.Weight)
    document.write(this.SIM)
    }	
}

let apple = new iphone("iOS 9, upgradable to iOS 9.2", "Apple A9", "Dual-core 1.84 GHz Twister", "PowerVR GT7600 (six-core graphics)", "iphone", "Apple", "1 GHZ", "512Mb", "Software", "16GB/32Gb", "LED", "VGA", "720 F", "2 microphones", "No", "Non-removable Li-Po 1715 mAh battery (6.9 Wh)", "Up to 240 h (3G)", "Up to 14 h (3G)", "Up to 50 h", "GSM / CDMA / HSPA / EVDO / LTE", "138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)", "143 g (5.04 oz)", "Nano-SIM")
apple.display_all()
apple.display_platform()
apple.display_battery()
apple. display_network_technology()
apple.display_body()

let apple_phone = {
	OS : "os",
	Chipset : "chip",
	CPU : "cpu",
	GPU : "gpu",
	Model : "model",
	Manufactuer: "manufacture",
	Processor: "processor",
	RAM_Memory: "ram",
	Keyboard: "keyboard",
	On_board_storage: "storage",
	Flash : "flash",
	Video_Call_camera: "camera",
	Video_Recording: "video_record",
	Noice_Cancelling: "noise_cancel",
	Expandable_storage: "expand_storage",   
    Type : "type",
    Stand_by : "standby",
    Talk_time : "talktime",
    Music_play : "musicplay",
    Technology : "tech",
    Dimensions : "dimensions",
    Weight : "weight",
    SIM : "sim",
    display_platform(){
    document.write(this.OS)
    document.write(this.Chipset)
    document.write(this.CPU)
    document.write(this.GPU)
    },
    display_battery(){
    document.write(this.Type)
    document.write(this.Stand_by)
    document.write(this.Talk_time)
    document.write(this.Music_play)
    },
    display_network_technology(){
    document.write(this.Technology)
    },
    display_body(){
    document.write(this.Dimensions)
    document.write(this.Weight)
    document.write(this.SIM)
    }	
}

apple_phone.display_platform()
apple_phone.display_battery()
apple_phone.display_network_technology()
apple_phone.display_body()


function television(model, lighting, size, type, wireless, usb, built, price){
	Model = model
	LED_lighting = lighting
	Sizes = size
	Type_of_240_Hz = type
	Wireless_HDMI = wireless
	USB = usb
	Built_in_videoservice = built
	price_RS = price
    document.write(Model)
    document.write(LED_lighting)
    document.write(Sizes)
    document.write(Type_of_240_Hz)
    document.write(Wireless_HDMI)
    document.write(USB)
    document.write(Built_in_videoservice)
    document.write(price_RS)
}
television("LG55LHX", "Backlight w/Local Dimming", "55 inches", "scanning Backlight (240 HZ effect)", "yes", "USB 2.0 (pictures, music,videos)", "youtube", 55000)

let lg = {
	Model: "LG55LHX",
	LED_lighting: "Backlight w/Local Dimming",
	Sizes: "55 inches",
	Type_of_240_Hz: "scanning Backlight (240 HZ “effect”)",
	Wireless_HDMI: "yes",
	USB: "USB 2.0 (pictures, music,videos)",
	Built_in_videoservice: "youtube",
	price_RS: "55000",
    display(){
    document.write(this.Model)
    document.write(this.LED_lighting)
    document.write(this.Sizes)
    document.write(this.Type_of_240_Hz)
    document.write(this.Wireless_HDMI)
    document.write(this.USB)
    document.write(this.Built_in_videoservice)
    document.write(this.price_RS)
    }
}

lg.display()

function laptop(model, os, processor, ram, screen, resolution, weight, storage, graphics, networking, battery, cost){
	Model = model
	Os = os
	Processor = processor 
	RAM = ram
	Screen = screen
	Resolution = resolution
	Weight = weight
	Storage = storage
	Graphics = graphics
	Networking = networking
	Battery_life = battery 
	Cost_RS = cost
    document.write(Model)
    document.write(Os)
    document.write(Processor)
    document.write(RAM)
    document.write(Screen)
    document.write(Resolution)
    document.write(Weight)
    document.write(Storage)
    document.write(Graphics)
    document.write(Networking)
    document.write(Battery_life)
    document.write(Cost_RS)
}

laptop("LGp430", "Windows 7 home base, Premium or professional", "Second Generation Intel Core i3,i5 or i7  processor", "upto 8GB", "14.0 inch HD-LCD -backlit", "1366*768", "4.28 pound", "320GB", "Intel HD Graphics", "802.11 b/g/n,bluetooth 3.0", "6-cell Battery", 50000)

let lg_laptop = {
	Model : "LGp430",
	Os: "Windows 7 home base, Premium or professional",
	Processor: "Second Generation Intel Core i3,i5 or i7  processor",
	RAM: "upto 8GB",
	Screen: "14.0 inch HD-LCD -backlit",
	Resolution: "1366*768",
	Weight: "4.28 pound",
	Storage :"320GB",
	Graphics: "Intel HD Graphics",
	Networking: "802.11 b/g/n,bluetooth 3.0",
	Battery_life : "6-cell Battery",
	Cost_RS: 50000,
    display(){
	document.write(this.Model)
    document.write(this.Os)
    document.write(this.Processor)
    document.write(this.RAM)
    document.write(this.Screen)
    document.write(this.Resolution)
    document.write(this.Weight)
    document.write(this.Storage)
    document.write(this.Graphics)
    document.write(this.Networking)
    document.write(this.Battery_life)
    document.write(this.Cost_RS)
    }
}

lg_laptop.display()

</script>
