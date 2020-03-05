const obj = {
  firstname:'vignesh',

  getfirstname: function(){
    return this.firstname
  },
  setfirstname: function(name){
  this.firstname = name
  },

  lastname:'balaji',
  getlastname: function(){
    return this.lastname
  },
  setlastname: function(name){
  this.lastname = name
  },

  dob:'14/07/1999',
  getdob: function(){
    return this.dob
  },
  setdob: function(name){
  this.dob = name
  },

  age:20,
  getage: function(){
    return this.age
  },
  setage: function(name){
  this.age = name
  },

  native:'coimbatore',
  getnative: function(){
    return this.native
  },
  setnative: function(name){
  this.native = name
  },


  intrest:'biking',
  getintrest: function(){
    return this.intrest
  },
  setintrest: function(name){
  this.intrest = name
  },




}

//firstname
console.log('firstName',obj.getfirstname())
obj.setfirstname('vicky')
console.log('firstName',obj.getfirstname())
//lastname
console.log('lastName',obj.getlastname())
obj.setlastname('vicky')
console.log('lastName',obj.getfirstname())
//dob
console.log('DOB',obj.getdob())
obj.setdob('14/07/1998')
console.log('DOB',obj.getdob())
//age
console.log('DOB',obj.getage())
obj.setage(21)
console.log('DOB',obj.getage())
//native
console.log('native',obj.getnative())
obj.setnative('salem')
console.log('native',obj.getnative())
//intrest
console.log('intrest',obj.getintrest())
obj.setintrest('gymming')
console.log('intrest',obj.getintrest())



