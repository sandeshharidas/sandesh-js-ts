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

class banking{
	constructor(name, date, time, atmno, cardno, branchname, transaction_no, code, withdrawal, accno, mod, balance, website){
	this.Bank_Name = name
	this.Date = date
	this.Time = time
	this.ATM_No = atmno
	this.CARD_No = cardno
	this.BRANCH_NAME = branchname
	this.Txn_No = transaction_no
	this.Response_code = code
	this.Withdrawal = withdrawal
	this.From_acc = accno
	this.Mod_RS = mod
	this.Available_Bal_Rs = balance
	this.Website = website    
    }
    display(){
	document.write(this.Bank_Name)
	document.write(this.Date)
	document.write(this.Time)
	document.write(this.ATM_No)
	document.write(this.CARD_No)
	document.write(this.BRANCH_NAME)
	document.write(this.Txn_No)
	document.write(this.Response_code)
	document.write(this.Withdrawal)
	document.write(this.From_acc)
	document.write(this.Mod_RS)
	document.write(this.Available_Bal_Rs)
	document.write(this.Website)
    }
}

class bill_netbank extends banking{
	constructor(site, uname, pwd, number, status, payment_mode, bank, b_username, b_password, trans_no, payment_stat){
	super("SBI Bank", "29/05/14", "19:48", "SJNBL48", "xxxx xxxxx xxxx 0516", "Bangalore Main Branch", 2907, 72, "500.00", "xxxxxxxxxx05 xx01", "0.00", "1000.00", "www.statebankofindia.com")
    this.website = site
	this.tnebusername = uname
	this.password = pwd
	this.consumer_number = number
	this.Billing_status = status
	this.mode_of_payment = payment_mode
	this.choose_bank = bank
	this.bank_username = b_username
	this.bank_password = b_password
	this.Transaction_no = trans_no
	this.payment_status = payment_stat
    }
    display1(){
    document.write(this.website)  
    document.write(this.tnebusername)
    document.write(this.password)
    document.write(this.consumer_number)
    document.write(this.Billing_status)
    document.write(this.mode_of_payment)
    document.write(this.choose_bank)
    document.write(this.bank_username)
    document.write(this.bank_password)
    document.write(this.Transaction_no)
    document.write(this.payment_status)
    }
}

let sbi = new bill_netbank("www.tnebnet.org", "agilan", 1234567, 23456123, "paid/unpaid", "netbanking", "sbi", "kumar007", 1234567, "18cv21828578437", "successful")
sbi.display()
sbi.display1()

class vehicle{
constructor(type, col, engine_no, chassis_no, company){
	 this.Vehicletype = type
     this.Colour = col
     this.Enginenumber = engine_no
     this.Chassisnumber = chassis_no
     this.Company = company 
	}
display2(){
	document.writeln(this.Vehicletype)
    document.writeln(this.Colour)
    document.writeln(this.Enginenumber)
    document.writeln(this.Chassisnumber)
    document.writeln(this.Company)
	}
}

class RC extends vehicle{
	constructor(number, name, sonof, paddress, taddress, dealer, chassis, engine, vehicleclass, maker, cylinder, weight, base, capacity, fuel, cc){
	super("light motor vehicle - car", "red", "kp98gtyihh457797", "tc5678898335r45", "BMW")
    this.Registration_Number = number
    this.Owner_Name = name
    this.S_W_Do = sonof
    this.Permanent_Address = paddress
    this.Temporary_Address = taddress
    this.Dealer =  dealer
    this.Classis_No = chassis
    this.Engine_No = engine
    this.Class_of_Vehicle = vehicleclass
    this.Makers_Name = maker
    this.No_of_Cylinder = cylinder
    this.Weight_KG = weight
    this.Wheel_Base = base
    this.Seating_Capacity = capacity
    this.Fuel = fuel
    this.Cubic_cylinder = cc
    }
    display1(){
	document.writeln(this.Registration_Number)
    document.writeln(this.Owner_Name)
    document.writeln(this.S_W_Do)
    document.writeln(this.Permanent_Address)
    document.writeln(this.Temporary_Address)
    document.writeln(this.Dealer)
    document.writeln(this.Classis_No)
    document.writeln(this.Engine_No)
    document.writeln(this.Class_of_Vehicle)
    document.writeln(this.Makers_Name)
    document.writeln(this.No_of_Cylinder)
    document.writeln(this.Weight_KG)
    document.writeln(this.Wheel_Base)
    document.writeln(this.Seating_Capacity)
    document.writeln(this.Fuel)
    document.writeln(this.Cubic_cylinder)
	}
}
let registration = new RC("TN 22 CY 2917", "Sachin", "Sirinivasan", "Mysore", "Bangalore", "Murugan Vehicles& Services Limited", 5793603, "0G3N72505757", "LMV (CAR)", "Maruthi SuzUKI India LTD", 3, 740, 2360, 5, "Petrol", 796)
registration.display1()
registration.display2()

</script>
