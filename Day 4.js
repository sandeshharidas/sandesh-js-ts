<script>

class card_details{
	constructor(name, email, number, comp_name, Designation, Address){
	this.Name = name
    this.mail_id = email
    this.contact_no = number
    this.company_name = comp_name
    this.designation = Designation
    this.address = Address    
    }
    display(){
    document.write(this.Name)
    document.write(this.mail_id)
    document.write(this.contact_no)
    document.write(this.company_name)
    document.write(this.designation)
    document.write(this.address)
    }
}
let naresh = new card_details("naresh", "naresh.jvt@gmail.com", "+91 9944860792", "jvt", "programmer", "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075")

let visiting = {
	Name : "naresh",
	mail_id : "naresh.jvt@gmail.com",
	contact_no : "+91 9944860792",
	company_name : "jvt",
	designation : "programmer",
	address : "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075",
    display(){
    document.write(Name)
    document.write(mail_id)
    document.write(contact_no)
    document.write(company_name)
    document.write(designation)
    document.write(address)    
    }
}
visiting.display()

class bill_netbank{
	constructor(site, uname, pwd, number, status, payment_mode, bank, b_username, b_password, trans_no, payment_stat){
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
    display(){
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

let netbanking = {
	website : "www.tnebnet.org",
	tnebusername : "agilan",
	password : 1234567,
	consumer_number : 23456123,
	Billing_status : "paid/unpaid",
	mode_of_payment : "netbanking",
	choose_bank : "sbi",
	bank_username : "kumar007",
	bank_password : 1234567,
	Transaction_no : "18cv21828578437",
	payment_status : "successful",
    display(){
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
netbanking.display()

class shop{
	constructor(brand, code, color, size, material, occasion, pattern, sleeve, necktype, fit, gender, arrival, price, effective_price){
	this.Brand = brand
    this.Product_Code = code
    this.Color = color
    this.Size = size
    this.Material = material
    this.Occasion = occasion
    this.Pattern = pattern
    this.Sleeve = sleeve
    this.Neck_Type = necktype
    this.Fit = fit
    this.Gender = gender
    this.Estimated_Arrival = arrival
    this.Price = price
    this.Effective_Price = effective_price
    }
    display(){
	document.write(this.Brand)
    document.write(this.Product_Code)
    document.write(this.Color)
    document.write(this.Size)
    document.write(this.Material)
    document.write(this.Occasion)
    document.write(this.Pattern)
    document.write(this.Sleeve)
    document.write(this.Neck_Type)
    document.write(this.Fit)
    document.write(this.Gender)
    document.write(this.Estimated_Arrival)
    document.write(this.Price)
    document.write(this.Effective_Price)
    }
}
let t_shirt = new shop("Scott International", "APPSCOTT-INTERNSWIT610835D77A441", "Black", "S", "Cotton", "Casual", "Solid", "Full Sleeves", "Hooded", "Slim", "Men", "9 days", "Rs 824", "Rs 453 after cashback")
t_shirt.display()

let hoodie = {
	Brand : "Scott International",
	Product_Code : "APPSCOTT-INTERNSWIT610835D77A441",
	Color : "Black",
	Size : "S",
	Material : "Cotton",
	Occasion : "Casual",
	Pattern : "Solid",
	Sleeve : "Full Sleeves",
	Neck_Type : "Hooded",
	Fit : "Slim",
	Gender : "Men",
	Estimated_Arrival : "9 days",
	price : "Rs 824",
	Effective_Price : "Rs 453 after cashback",
	display(){
	document.write(this.Brand)
    document.write(this.Product_Code)
    document.write(this.Color)
    document.write(this.Size)
    document.write(this.Material)
    document.write(this.Occasion)
    document.write(this.Pattern)
    document.write(this.Sleeve)
    document.write(this.Neck_Type)
    document.write(this.Fit)
    document.write(this.Gender)
    document.write(this.Estimated_Arrival)
    document.write(this.Price)
    document.write(this.Effective_Price)    
    }
}

</script>
