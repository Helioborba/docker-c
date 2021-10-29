dapra = [{
    "usuario": "             ",
    "mensagem": "             "
},{
    "usuario": "frafrfef",
    "mensagem": "frafra"
}]

alkaDif = {
    "keygem": {
        "id": "1",
        "user": "",
        "mensage": ""
    }
}
newvalue = []
val = 0
for tup in dapra:
    for key,value in tup.items():
        if key == '' or value == '':
            print("there was a null")
    val += 1
    tup.update(id=str(val))
    newvalue.append( {
        f' {val}': tup
    })
    

print(newvalue)
