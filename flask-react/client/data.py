dapra = [{
    "usuario": "frafrfef",
    "mensagem": "frafra"
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
    val += 1
    tup.update(id=str(val))
    newvalue.append( {
        f' {val}': tup
    })
    

print(newvalue)
