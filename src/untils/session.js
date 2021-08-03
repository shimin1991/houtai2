const session = {
	sessionStorage: window.sessionStorage,
	set: function(key, value) {
		if (typeof value === 'object') {
			value = JSON.stringify(value)
		}

		this.sessionStorage.setItem(key, value)
	},
	get: function(key) {
		const value = this.sessionStorage.getItem(key) || ''
		if(value){
			return JSON.parse(value)
		}else{
			 return value
		}
		
	},
	remove(key) {
		this.sessionStorage.removeItem(key)
	},
	clear() {
		this.sessionStorage.clear()
	}
}
export default session

