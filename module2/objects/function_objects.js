let person={
    firstname:"Joe",
    lastname:"Biden",
    fullname:function()
    {
        return this.firstname+" "+this.lastname;
    }

}
console.log(person.fullname());