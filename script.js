class hashMap {
    constructor() {
        this.bucket = new Array(12);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;

        const prime = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = prime * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.bucket.length;
    }

    set(key,value) {
        const hashCode = this.hash(key)
        this.bucket[hashCode] = [key,value]
        this.size++
    }
    get(key) {
        const hashCode = this.hash(key)

        if(this.bucket[hashCode]){

        console.log(this.bucket[hashCode]);
        return this.bucket[hashCode];
        } else {
            console.log('entry not found')
        }
        
    }
    has(key) {
        const hashCode = this.hash(key)
        if(this.bucket[hashCode]) {
            console.log('true');
            return true;
        } else {
            console.log('false');
            return false;
        }
    }

    remove(key) {
        const hashCode = this.hash(key);
        if(this.bucket[hashCode]) {
            this.bucket[hashCode] = undefined;
            this.size--;
        } else{
            console.log('entry not found')
        }
    }

    length() {
        console.log(this.size);
        return this.size
    }

    keys() {
        for (const bucket of this.bucket) {
            if (bucket) {
                for (const item of bucket) {
                    if (item !== undefined) {
                        console.log(bucket[0]);
                    }
                }
            }
        }
    }
    values() {
        for (const bucket of this.bucket) {
            if (bucket) {
                for (const item of bucket) {
                    if (item !== undefined) {
                        console.log(bucket[1]);
                    }
                }
            }
        }
    }

}

let map = new hashMap
map.set('stephen','etienne')
map.set('paul','pailmo')
map.set('gwim','gwimpsinson')
map.remove('gwim')
map.length()
map.keys()
map.values()

