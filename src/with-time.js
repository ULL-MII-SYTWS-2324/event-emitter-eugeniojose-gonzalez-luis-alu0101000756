import { EventEmitter } from "events"

class WithTime extends EventEmitter{
    
    execute(f, ...args) {
        let fName = f.name

        this.emit("begin", fName)
        let start = Date.now()
        try{
            f(args, (e, r) =>{
                if(e){
                    this.emit("error", fName, e)
                }else{
                    this.emit("time", fName, Date.now() - start)
                    this.emit("result", fName, r)
                    this.emit("end", fName)
                }
            })
        }catch(err){
            this.emit("error", fName, err)
        }
    }
}

export default WithTime