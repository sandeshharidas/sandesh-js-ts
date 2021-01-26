<script>

class tv_specs{
	constructor(model, lighting, size, type, wireless, usb, built, price){
    Model = model
	LED_lighting = lighting
	Sizes = size
	Type_of_240_Hz = type
	Wireless_HDMI = wireless
	USB = usb
	Built_in_videoservice = built
	price_RS = price
    }
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

class laptop_specs extends tv_specs{
	constructor(model, os, processor, ram, screen, resolution, weight, storage, graphics, networking, battery, cost){
    super("LG55LHX", "Backlight w/Local Dimming", "55 inches", "scanning Backlight (240 HZ effect)", "yes", "USB 2.0 (pictures, music,videos)", "youtube", 55000)
    this.Model = model
	this.Os = os
	this.Processor = processor 
	this.RAM = ram
	this.Screen = screen
	this.Resolution = resolution
	this.Weight = weight
	this.Storage = storage
	this.Graphics = graphics
	this.Networking = networking
	this.Battery_life = battery 
	this.Cost_RS = cost
    }
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
let p = new laptop_specs("LGp430", "Windows 7 home base, Premium or professional", "Second Generation Intel Core i3,i5 or i7  processor", "upto 8GB", "14.0 inch HD-LCD -backlit", "1366*768", "4.28 pound", "320GB", "Intel HD Graphics", "802.11 b/g/n,bluetooth 3.0", "6-cell Battery", 50000)
p.display()

</script>
