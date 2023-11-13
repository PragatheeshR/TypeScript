class User{

    private firstName: string;
    private lastName: string;

     constructor(fname: string, lName: string){
        this.firstName = fname;
        this.lastName = lName;
    }

    public getFirstName() : string{
        return this.firstName;
    }

    public setFirstName(name: string): void{
        this.firstName = name;
    }

    public getLastName() : string{
        return this.lastName;
    }

    public setLastName(name: string): void{
        this.lastName = name;
    }

}

    let myUser = new User("Pragatheesh", "Raghu");

    console.log(myUser.getFirstName());
    console.log(myUser.getLastName());
    myUser.setFirstName("Thanigai");
    myUser.setLastName("R");

    console.log(myUser.getFirstName());
    console.log(myUser.getLastName());

    


    
    


