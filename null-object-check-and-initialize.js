var result = [{},{value:"test"}]

const assigneeLdapNameLabel =
            (result && result.find(val => val.value ==="test")) || ''
console.log(assigneeLdapNameLabel)
--------------------------------------------------------
var result = null

const assigneeLdapNameLabel =
            (result && result.find(val => val.value ==="test")) || 'xxx'
console.log(assigneeLdapNameLabel)
